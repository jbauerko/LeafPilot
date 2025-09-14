from pathlib import Path
from fastapi import HTTPException, UploadFile
from fastapi.responses import FileResponse
import tempfile
import subprocess
import os
import shutil

class HTMLService:
    @staticmethod
    async def compile_html(file: UploadFile) -> FileResponse:
        if not file.filename.endswith('.tex'):
            raise HTTPException(
                status_code=400,
                detail="Only .tex files are allowed"
            )
        
        # Create temporary directory for processing
        with tempfile.TemporaryDirectory() as temp_dir:
            try:
                # Save uploaded file to temporary directory
                tex_file_path = os.path.join(temp_dir, file.filename)
                with open(tex_file_path, "wb") as buffer:
                    content = await file.read()
                    buffer.write(content)
                
                # Get the path to the bat file
                bat_file_path = os.path.join(
                    os.path.dirname(__file__), 
                    "html_services", 
                    "tex2html.bat"
                )
                
                # Run the bat file to convert LaTeX to HTML
                # Pass just the filename since we're working in the temp directory
                tex_filename = os.path.basename(tex_file_path)
                result = subprocess.run(
                    [bat_file_path, tex_filename, temp_dir],
                    capture_output=True,
                    text=True,
                    cwd=temp_dir
                )
                
                if result.returncode != 0:
                    # Capture both stdout and stderr for better debugging
                    error_details = f"Return code: {result.returncode}\n"
                    if result.stdout:
                        error_details += f"STDOUT:\n{result.stdout}\n"
                    if result.stderr:
                        error_details += f"STDERR:\n{result.stderr}\n"
                    
                    raise HTTPException(
                        status_code=500,
                        detail=f"LaTeX to HTML conversion failed: {error_details}"
                    )
                
                # Get the generated HTML file path
                basename = Path(file.filename).stem
                html_file_path = os.path.join(temp_dir, f"{basename}.html")
                
                if not os.path.exists(html_file_path):
                    raise HTTPException(
                        status_code=500,
                        detail="HTML file was not generated"
                    )
                
                # Create a temporary file to return (outside the temp directory)
                with tempfile.NamedTemporaryFile(mode='w+b', suffix='.html', delete=False) as temp_html:
                    # Copy the generated HTML content to the temporary file
                    with open(html_file_path, 'rb') as source:
                        temp_html.write(source.read())
                    
                    temp_html_path = temp_html.name
                
                # Return the HTML file as FileResponse
                return FileResponse(
                    path=temp_html_path,
                    filename=f"{basename}.html",
                    media_type="text/html",
                    headers={"Content-Disposition": f"attachment; filename={basename}.html"}
                )
                
            except subprocess.CalledProcessError as e:
                raise HTTPException(
                    status_code=500,
                    detail=f"Conversion process failed: {str(e)}"
                )
            except Exception as e:
                raise HTTPException(
                    status_code=500,
                    detail=f"Unexpected error during conversion: {str(e)}"
                )
        
        

        