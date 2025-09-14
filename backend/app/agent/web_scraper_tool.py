import re
import logging
from typing import Any, Dict
from groq import Groq

from app.core.config import settings

# Set up logging
logger = logging.getLogger(__name__)


class WebScraperTool:
    """
    Tool for scraping and summarizing web pages using Groq's compound model.
    
    This tool can read web pages and provide summaries of their content.
    """

    name = "scrape_web_page"
    description = "Scrape and summarize content from a web page URL. Use this when the user provides a web link."
    input_schema = {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "description": "The URL of the web page to scrape and summarize"
            }
        },
        "required": ["url"]
    }

    def __init__(self):
        self.client = Groq(api_key=settings.groq_api_key)

    async def run(self, args: Dict[str, Any]) -> Dict[str, Any]:
        """Scrape and summarize a web page."""
        try:
            url = args.get("url")
            if not url:
                return {
                    "success": False,
                    "error": "URL is required"
                }
            
            # Validate URL format
            if not self._is_valid_url(url):
                return {
                    "success": False,
                    "error": f"Invalid URL format: {url}"
                }
            
            logger.info(f"WEB_SCRAPER: Scraping URL: {url}")
            
            # Use Groq compound model to scrape and summarize the page
            completion = self.client.chat.completions.create(
                messages=[
                    {
                        "role": "user",
                        "content": f"Summarize the key points of this page: {url}",
                    }
                ],
                model="groq/compound",
            )
            
            summary = completion.choices[0].message.content.strip()
            
            logger.info(f"WEB_SCRAPER: Successfully scraped URL ({len(summary)} characters)")
            
            return {
                "success": True,
                "url": url,
                "summary": summary,
                "message": f"Successfully scraped and summarized: {url}"
            }
            
        except Exception as e:
            logger.error(f"WEB_SCRAPER: Error scraping URL {url}: {e}")
            return {
                "success": False,
                "error": f"Error scraping URL: {str(e)}"
            }

    def _is_valid_url(self, url: str) -> bool:
        """Basic URL validation."""
        url_pattern = re.compile(
            r'^https?://'  # http:// or https://
            r'(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,6}\.?|'  # domain...
            r'localhost|'  # localhost...
            r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})'  # ...or ip
            r'(?::\d+)?'  # optional port
            r'(?:/?|[/?]\S+)$', re.IGNORECASE)
        return url_pattern.match(url) is not None
