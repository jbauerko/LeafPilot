import json
import os
import subprocess
import sys
from pathlib import Path
from typing import Dict, Any
from groq import Groq
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Add backend directory to Python path for direct execution
backend_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)
from app.models.schemas import ManimAnimationInput, ManimAnimationOutput

class ManimService:
    def __init__(self, template_path: str = None):
        # should set the template path and directory where videos are saved
        # the template is in the same directory as this file
        # the files should be saved in the directory: ~/backend/media/videos/manim/ no matter what
        self.template_path = template_path or os.path.join(os.path.dirname(__file__), "manim_template.py")
        
        # Set output directory to backend/media/videos/manim/
        backend_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        self.output_dir = os.path.join(backend_dir, "media", "manim")
        
        # Ensure output directory exists
        os.makedirs(self.output_dir, exist_ok=True)
    
    def generate_animation_code(self, description: str) -> str:
        print("=" * 80)
        print("STARTING ANIMATION CODE GENERATION")
        print("=" * 80)
        print(f"Description: {description}")
        # Get API key directly from environment
        api_key = os.getenv('GROQ_API_KEY')
        
        print(f"API Key available: {bool(api_key)}")
        print(f"Current working directory: {os.getcwd()}")
        
        # Check if API key is available
        if not api_key:
            print("ERROR: No API key found!")
            return "# Error: GROQ_API_KEY not found. Please set the environment variable."
        
        try:
            print("Initializing Groq client...")
            client = Groq(api_key=api_key)
            print("Groq client initialized successfully")
        except Exception as e:
            return f"# Error initializing Groq client: {str(e)}"
        
        system_instructions = (
            "### ROLE\n"
            "You are a manim animation generation bot. You must produce a section of manim python code that animates the description provided for you.\n"
            "Your section of code will be inserted below:\n"
            "class MyAnimation(Scene):\n"
            "    def construct(self):\n"
            "        # Animation code will be injected by the parser\n"
            "        #{ANIMATION_INJECTION}\n"
            "        pass\n"
            "### OUTPUT CONTRACT\n"
            "Output EXACTLY the code that will replace the #{ANIMATION_INJECTION} placeholder in the manim_template.py file.\n"
            "DO NOT INCLUDE ANY IMPORTS, DO NOT INCLUDE class MyAnimation(Scene):, DO NOT INCLUDE def construct(self):, DO NOT INCLUDE pass.\n"
            "DO NOT INCLUDE explanations, markdown, code fences, or any text outside the code.\n"
            "ONLY OUTPUT THE RAW PYTHON CODE - NO OTHER TEXT.\n"
            "IMPORTANT: Do not add any indentation to your code - it will be automatically indented to match the construct method.\n"
            "### RESOURCES\n"
            "You can use the following resources to help you generate the code:\n"
            "https://docs.manim.community/en/stable\n"
            "### GUIDELINES\n"
            "1. Use the manim library to generate the code.\n"
            "2. Keep code simple and clean.\n"
            "3. Start each line at the beginning (no leading spaces).\n"
            "4. Use x and y axes to plot graphs\n"
            "5. Not everything needs to be animated, just the important parts.\n"
            "6. **IMPORTANT**: Try and avoid using if statements and for loops. Include tabs for indentation if you do use them. Tabs are 4 spaces.\n"
            "7. Remember to use axes = Axes(...) to create the axes object.\n"
            "### EXAMPLE 1\n"
            "square = Square(side_length=2, color=BLUE, fill_opacity=0.5)\n"
            "self.play(Create(square))\n"
            "self.play(Rotate(square, angle=PI/2))\n"
            "self.play(square.animate.shift(RIGHT*3))\n"
            "self.play(FadeOut(square))\n"
            "### EXAMPLE 2\n"
            "axes = Axes(\n"
            "    x_range=[-3, 3, 1],\n"
            "    y_range=[-2, 9, 1],\n"
            "    axis_config={'color': BLUE},\n"
            ")\n"
            "labels = axes.get_axis_labels(x_label='x', y_label='y')\n"
            "self.play(Create(axes), Write(labels))\n"
            "functions = [\n"
            "    lambda x: x**2,\n"
            "    lambda x: x**3 / 3,\n"
            "    lambda x: np.sin(x) * 2,\n"
            "]\n"
            "colors = [RED, GREEN, YELLOW]\n"
            "for func, color in zip(functions, colors):\n"
            "   graph = axes.plot(func, color=color)\n"
            "   self.play(Create(graph), run_time=2)\n"
            "   self.wait(0.1)\n"
            "self.wait(2)\n"
        )

        user_message = f"Please create a manim animation for this description: {description}"
        
        print("Making API call to Groq...")
        print(f"User message: {user_message}")
        
        try:
            response = client.chat.completions.create(
                messages=[
                    {"role": "system",
                     "content": system_instructions},
                    {"role": "user",
                     "content": user_message}
                ],
                # model="groq/compound"
                model="openai/gpt-oss-120b"
            )
            print("API call successful!")
        except Exception as e:
            print(f"ERROR in API call: {str(e)}")
            return f"# Error in API call: {str(e)}"
        
        try:
            # Get the generated manim code from the response
            raw_code = response.choices[0].message.content.strip()
            
            # Auto-indent every line by 4 spaces (1 tab) to match construct method indentation
            lines = raw_code.split('\n')
            indented_lines = []
            for line in lines:
                if line.strip():  # Skip empty lines
                    indented_lines.append('        ' + line.strip())  # 4 spaces
                else:
                    indented_lines.append('')  # Keep empty lines empty
            
            generated_code = '\n'.join(indented_lines)
            
            # Log the response for debugging
            print("=" * 80)
            print("GROQ LLM RESPONSE:")
            print("=" * 80)
            print(f"Input description: {description}")
            print("-" * 40)
            print("Generated code:")
            print(generated_code)
            print("=" * 80)
            
            return generated_code
        except Exception as e:
            # Log the error
            print(f"Error in generate_animation_code: {str(e)}")
            print(f"Response object: {response}")
            return f"# Error generating animation code: {str(e)}"
        
    def get_quality_flags(self, quality: str) -> str:
        # set low medium or high quality flags to be injected into the manim_template.py
        quality_flags = {
            "low_quality": "--quality=l",
            "medium_quality": "--quality=m", 
            "high_quality": "--quality=h",
            "production_quality": "--quality=p"
        }
        return quality_flags.get(quality, "--quality=m")
    
    def generate_manim_file(self, input_data: ManimAnimationInput) -> str:
        # this needs to inject all of the json input into the manim_template.py, and create/overwrite the persistent runner file
        
        # Read the template file
        with open(self.template_path, 'r') as f:
            template_content = f.read()
        
        # Generate configuration injection
        config_injection = f"""
config.pixel_height = {input_data.height}
config.pixel_width = {input_data.width}
config.frame_rate = {input_data.frame_rate}
config.background_color = {input_data.background_color}
"""
        
        # Generate animation code injection
        animation_injection = self.generate_animation_code(input_data.description)
        
        # Generate output configuration injection
        output_config_injection = f"""
    config.output_file = "{input_data.output_file}"
    config.media_dir = r"{self.output_dir}"
"""
        
        # Replace the injection placeholders
        temp_content = template_content.replace("#{CONFIG_INJECTION}", config_injection)
        temp_content = temp_content.replace("#{ANIMATION_INJECTION}", animation_injection)
        temp_content = temp_content.replace("#{OUTPUT_CONFIG_INJECTION}", output_config_injection)
        
        # Create persistent file path in the same directory as the service
        persistent_file_path = os.path.join(os.path.dirname(__file__), "tempCodeRunnerFile.py")
        
        # Write to persistent file (overwrites existing file)
        with open(persistent_file_path, 'w') as f:
            f.write(temp_content)
        
        return persistent_file_path
        
    def run_manim_animation(self, input_data: ManimAnimationInput) -> Dict[str, Any]:
        # this should run the persistent runner file and save the video to the output directory set in the __init__
        persistent_file_path = self.generate_manim_file(input_data)
        
        try:
            # Import the generated file and run the scene directly
            import importlib.util
            spec = importlib.util.spec_from_file_location("temp_manim", persistent_file_path)
            temp_module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(temp_module)
            
            # Get the MyAnimation class and run it
            scene_class = getattr(temp_module, "MyAnimation")
            scene = scene_class()
            scene.render()
            
            # Look for the generated video file
            video_filename = f"{input_data.output_file}.mp4"
            for root, dirs, files in os.walk(self.output_dir):
                if video_filename in files:
                    video_path = os.path.join(root, video_filename)
                    break
            else:
                video_path = None
            
            # Check if video file exists
            if video_path and os.path.exists(video_path):
                return {
                    "success": True,
                    "video_path": video_path,
                    "video_url": f"/media/videos/manim/1080p60/{video_filename}",
                    "stdout": "Direct execution successful",
                    "stderr": ""
                }
            else:
                return {
                    "success": False,
                    "error": "Video file was not created",
                    "stdout": "Direct execution completed but no video found",
                    "stderr": ""
                }
                
        except Exception as e:
            return {
                "success": False,
                "error": f"Exception during direct execution: {str(e)}"
            }
    
    @staticmethod
    async def compile_manim(input_data: ManimAnimationInput) -> ManimAnimationOutput:
        # should parse the ManimAnimationInput, generate the animation code, generate the manim file, and run the manim animation
        try:
            # Create service instance
            service = ManimService()
            
            # Run the animation
            result = service.run_manim_animation(input_data)
            
            # Return ManimAnimationOutput
            return ManimAnimationOutput(
                success=result.get("success", False),
                video_path=result.get("video_path"),
                video_url=result.get("video_url")
            )
            
        except Exception as e:
            return ManimAnimationOutput(
                success=False,
                video_path=None,
                video_url=None,
                error=str(e)
            )

def main():
    """
    Example usage of the ManimParser.
    """
    # Example JSON input
    example_input = ManimAnimationInput(
        height=1080,
        width=1920,
        output_file="example_animation2",
        description="Animate the integral of y=x^2",
        frame_rate=30,
        background_color="WHITE",
        quality="medium_quality"
    )
    
    # Create service and run animation
    service = ManimService()
    result = service.run_manim_animation(example_input)
    
    print("Animation generation result:")
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
