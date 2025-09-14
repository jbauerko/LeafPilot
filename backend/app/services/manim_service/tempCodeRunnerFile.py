# manim_template.py
from manim import *
from manim import config

# Configuration will be injected by the parser

config.pixel_height = 1080
config.pixel_width = 1920
config.frame_rate = 60
config.background_color = WHITE


class MyAnimation(Scene):
    def construct(self):
        # Animation code will be injected by the parser
        square = Square(side_length=2, color=RED, fill_opacity=0.5)
        self.play(Create(square))
        self.play(Rotate(square, angle=PI/2))
        self.play(MoveAlongPath(square, Circle(radius=2, color=WHITE)), rate_func=linear, run_time=3)
        self.play(FadeOut(square))
        pass

if __name__ == "__main__":
    # Output configuration will be injected by the parser
    
    config.output_file = "example_animation"
    config.media_dir = r"c:\Users\jyall\Documents\GitHub\htn-2025\backend\app\media\manim"

    
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

