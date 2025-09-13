from pathlib import Path
from fastapi import HTTPException, UploadFile
from fastapi.responses import FileResponse
import tempfile
import subprocess
import os
import shutil

class PDFService:
    @staticmethod
    async def compile_pdf(file: UploadFile) -> FileResponse:
        if not file.filename.endswith('.tex'):
            raise HTTPException(
                status_code=400,
                detail="Only .tex files are allowed"
            )
        try:
            with tempfile.TemporaryDirectory() as temp_dir:
                temp_path = Path(temp_dir)
                tex_file = temp_path / file.filename
                content = await file.read()
                tex_file.write_bytes(content)
                result = subprocess.run([
                    'pdflatex', 
                    '-output-directory', str(temp_path),
                    '-interaction=nonstopmode',  # Don't stop for errors
                    str(tex_file)
                ], capture_output=True, text=True, cwd=temp_path)
                
                pdf_filename = file.filename.replace('.tex', '.pdf')
                pdf_file = temp_path / pdf_filename
                
                if not pdf_file.exists():
                    raise HTTPException(
                        status_code=400, 
                        detail=f"LaTeX compilation failed: {result.stderr}"
                    )
                
                output_dir = Path("output")
                output_dir.mkdir(exist_ok=True)
                
                output_pdf = output_dir / "compiled.pdf"
                shutil.copy2(pdf_file, output_pdf)
                
                return FileResponse(
                    path=str(output_pdf),
                    media_type="application/pdf",
                    filename="compiled.pdf"
                )
                
        except FileNotFoundError:
            raise HTTPException(
                status_code=500,
                detail="pdflatex not found. Please install LaTeX (MiKTeX or TeX Live)"
            )
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"PDF compilation error: {str(e)}"
            )

        