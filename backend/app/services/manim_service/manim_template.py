# manim_template.py
from manim import *
from manim import config

# Configuration will be injected by the parser
#{CONFIG_INJECTION}

class MyAnimation(Scene):
    def construct(self):
        # Animation code will be injected by the parser
#{ANIMATION_INJECTION}
        pass

if __name__ == "__main__":
    # Output configuration will be injected by the parser
    #{OUTPUT_CONFIG_INJECTION}
    
    config.save_as_gif = False
    config.save_last_frame = False
    config.write_to_movie = True
    config.format = "mp4"
    config.save_pngs = False
    config.save_sections = False
    config.disable_caching = True
    config.flush_cache = True
    # This file is now run directly by Manim via subprocess from the service
    # No need for additional subprocess calls here
    scene = MyAnimation()
    scene.render()

