# Initialize the script for Windows

# Install venv
python -m venv ./venv/

# Active venv
./venv/Scripts/Activate.ps1

if ($?){
	# If successfully activated venv
	"Installing script dependencies..."
	pip install -r ./requirements.txt

	"Setup complete!"
} else {
	"Please install a virtual environment in the directory 'venv', at the project root directory."
}
