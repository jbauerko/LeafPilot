# Initialize project for Mac/Linux
# Install venv
python3 -m venv ./venv/
#
# Activate venv
source ./venv/bin/activate

if [ $? -eq 0 ]; then
	echo "Installing script dependencies..."
	pip install -r ./requirements.txt

	echo ""
	echo "Setup complete!"
else
	echo "Please install a virtual environment in the directory 'venv', at the project root directory."
fi
