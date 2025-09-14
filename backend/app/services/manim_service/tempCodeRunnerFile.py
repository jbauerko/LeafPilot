# manim_template.py
from manim import *
from manim import config

# Configuration will be injected by the parser

config.pixel_height = 1080
config.pixel_width = 1920
config.frame_rate = 30
config.background_color = WHITE


class MyAnimation(Scene):
    def construct(self):
        # Animation code will be injected by the parser
        vector = Arrow(start=ORIGIN, end=2*RIGHT + UP, color=BLUE, buff=0)
        self.play(Create(vector))
        transformed_vector = Arrow(start=ORIGIN, end=4*RIGHT + 2*UP, color=RED, buff=0)
        self.play(Transform(vector, transformed_vector))
        self.play(FadeOut(vector))
        pass

if __name__ == "__main__":
    # Output configuration will be injected by the parser
    
    config.output_file = "anim_2_ccdeac"
    config.media_dir = r"/home/jbauerko/hackathons/htn-2025/backend/app/media/manim"

    
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

