import os
import subprocess
import uuid
import logging
from typing import Any, Dict
from pathlib import Path

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class ScreenshotTool:
    """Tool that extracts the last frame from an MP4 video and returns image path and video URL.
    
    This tool takes an MP4 video file path and:
    1. Extracts the last frame as a screenshot
    2. Returns both the screenshot path and a clean video URL (without 'run:' prefix)
    3. Generates unique filenames to avoid conflicts
    """

    name = "generate_video_screenshot"
    description = "Extract frame from middle of MP4 video as screenshot and return both image path and video URL for LaTeX embedding."
    input_schema = {
        "type": "object",
        "properties": {
            "video_path": {"type": "string", "description": "Path to the MP4 video file"},
            "output_dir": {"type": "string", "description": "Directory to save screenshot", "default": "app/media/manim/images"}
        },
        "required": ["video_path"]
    }

    async def run(self, args: Dict[str, Any]) -> Dict[str, Any]:
        """Extract screenshot from video and return paths for LaTeX embedding."""
        logger.info(f"SCREENSHOT: Starting screenshot generation with args: {args}")
        
        try:
            video_path = args["video_path"]
            output_dir = args.get("output_dir", "app/media/manim/images")
            
            logger.info(f"SCREENSHOT: Processing video: {video_path}")
            logger.info(f"SCREENSHOT: Output directory: {output_dir}")
            
            # Validate video file exists
            if not os.path.exists(video_path):
                error_msg = f"Video file not found: {video_path}"
                logger.error(f"SCREENSHOT: {error_msg}")
                return {"success": False, "error": error_msg}
            
            logger.info(f"SCREENSHOT: Video file exists, size: {os.path.getsize(video_path)} bytes")
            
            # Ensure output directory exists
            Path(output_dir).mkdir(parents=True, exist_ok=True)
            logger.info(f"SCREENSHOT: Output directory ensured: {output_dir}")
            
            # Generate unique screenshot filename
            video_name = Path(video_path).stem
            screenshot_filename = f"{video_name}_screenshot_{uuid.uuid4().hex[:6]}.png"
            screenshot_path = os.path.join(output_dir, screenshot_filename)
            
            logger.info(f"SCREENSHOT: Generated screenshot filename: {screenshot_filename}")
            logger.info(f"SCREENSHOT: Full screenshot path: {screenshot_path}")
            
            # Extract last frame using ffmpeg
            logger.info("SCREENSHOT: Starting ffmpeg extraction...")
            success = await self._extract_last_frame(video_path, screenshot_path)
            
            if not success:
                error_msg = "Failed to extract screenshot from video"
                logger.error(f"SCREENSHOT: {error_msg}")
                return {"success": False, "error": error_msg}
            
            # Verify screenshot was created
            if os.path.exists(screenshot_path):
                logger.info(f"SCREENSHOT: Screenshot created successfully: {screenshot_path}")
                logger.info(f"SCREENSHOT: Screenshot size: {os.path.getsize(screenshot_path)} bytes")
            else:
                error_msg = "Screenshot file was not created despite successful extraction"
                logger.error(f"SCREENSHOT: {error_msg}")
                return {"success": False, "error": error_msg}
            
            # Generate localhost URL for video instead of file path
            # Determine which quality directory the video is in
            video_filename = os.path.basename(video_path)
            if "1080p60" in video_path:
                video_url = f"http://localhost:8000/videos60/{video_filename}"
            else:
                # Default to 1080p30
                video_url = f"http://localhost:8000/videos/{video_filename}"
            logger.info(f"SCREENSHOT: Generated localhost video URL: {video_url}")
            
            # Make screenshot path absolute for LaTeX compilation
            logger.info(f"SCREENSHOT: Current working directory: {os.getcwd()}")
            logger.info(f"SCREENSHOT: Original screenshot path: {screenshot_path}")
            absolute_screenshot_path = os.path.abspath(screenshot_path).replace('\\', '/')
            logger.info(f"SCREENSHOT: Absolute screenshot path: {absolute_screenshot_path}")
            
            result = {
                "success": True,
                "screenshot_path": absolute_screenshot_path,  # Use absolute path for LaTeX
                "video_url": video_url,
                "screenshot_filename": screenshot_filename
            }
            
            logger.info(f"SCREENSHOT: Screenshot generation completed successfully: {result}")
            return result
            
        except Exception as e:
            error_msg = f"Screenshot generation failed: {str(e)}"
            logger.error(f"SCREENSHOT: {error_msg}", exc_info=True)
            return {"success": False, "error": error_msg}

    async def _extract_last_frame(self, video_path: str, output_path: str) -> bool:
        """Extract frame from middle of video using ffmpeg."""
        try:
            # Use ffmpeg to extract a frame from the middle of the video
            # First get video duration, then extract frame from middle
            # -ss 2: seek to 2 seconds from start (middle-ish for short videos)
            # -vframes 1: extract 1 frame
            # -q:v 2: high quality
            cmd = [
                'ffmpeg',
                '-i', video_path,
                '-ss', '2',
                '-vframes', '1',
                '-q:v', '2',
                '-y',  # overwrite output file
                output_path
            ]
            
            logger.info(f"SCREENSHOT: Running ffmpeg command: {' '.join(cmd)}")
            
            # Run ffmpeg command
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
            
            logger.info(f"SCREENSHOT: FFmpeg return code: {result.returncode}")
            logger.info(f"SCREENSHOT: FFmpeg stdout: {result.stdout}")
            if result.stderr:
                logger.info(f"SCREENSHOT: FFmpeg stderr: {result.stderr}")
            
            if result.returncode == 0 and os.path.exists(output_path):
                logger.info(f"SCREENSHOT: FFmpeg extraction successful, output file exists: {output_path}")
                return True
            else:
                error_msg = f"FFmpeg failed with return code {result.returncode}, stderr: {result.stderr}"
                logger.error(f"SCREENSHOT: {error_msg}")
                return False
                
        except subprocess.TimeoutExpired:
            error_msg = "FFmpeg command timed out after 30 seconds"
            logger.error(f"SCREENSHOT: {error_msg}")
            return False
        except Exception as e:
            error_msg = f"Error running ffmpeg: {str(e)}"
            logger.error(f"SCREENSHOT: {error_msg}", exc_info=True)
            return False
