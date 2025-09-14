@echo off
REM Pipeline script to convert LaTeX to HTML with proper styling
REM Usage: tex2html.bat input.tex [output_directory]

if "%~1"=="" (
    echo Usage: tex2html.bat input.tex [output_directory]
    exit /b 1
)

set "texfile=%~1"
set "output_dir=%~2"
set "basename=%~n1"

REM If no output directory specified, use current directory
if "%output_dir%"=="" set "output_dir=."

REM Change to output directory for processing
pushd "%output_dir%"

echo Converting %texfile% to HTML in %output_dir%...

REM Step 1: Convert LaTeX to HTML
echo Running: make4ht -lm draft "%texfile%"
make4ht -lm draft "%texfile%" 2>&1

if %errorlevel% neq 0 (
    echo make4ht failed with error code %errorlevel%
    echo Trying alternative conversion method...
    
    REM Try without the -lm flag
    make4ht draft "%texfile%" 2>&1
    
    if %errorlevel% neq 0 (
        echo Alternative method also failed
        echo Check the LaTeX file for syntax errors or unsupported packages
        echo Make sure make4ht and required LaTeX packages are installed
        popd
        exit /b 1
    )
)

REM Step 2: Embed CSS directly in HTML
echo Embedding CSS in HTML...
powershell -Command "(Get-Content '%basename%.html') -replace '<link href=''%basename%.css'' rel=''stylesheet'' type=''text/css'' />', '<style>/* Override LaTeXML dark mode automatically */:root { background-color: white !important; color: black !important; } html { background-color: white !important; } body { background-color: white !important; color: black !important; } h1, h2, h3, h4, h5, h6, p, div, span, a { color: black !important; } @media (prefers-color-scheme: dark) { :root { background-color: white !important; color: black !important; } html { background-color: white !important; } body { background-color: white !important; color: black !important; } h1, h2, h3, h4, h5, h6, p, div, span, a { color: black !important; } } .center { text-align: center; }</style>' | Set-Content '%basename%.html'"

REM Clean up the separate CSS file
if exist "%basename%.css" del "%basename%.css"

REM Return to original directory
popd

echo Conversion complete! HTML file created: %output_dir%\%basename%.html
