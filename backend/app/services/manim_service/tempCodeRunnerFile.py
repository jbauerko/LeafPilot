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
        axes = Axes(
        x_range=[-3, 3, 1],
        y_range=[0, 9, 1],
        axis_config={"color": BLUE},
        )
        labels = axes.get_axis_labels(x_label="x", y_label="y")
        graph = axes.plot(lambda x: x**2, x_range=[-3, 3], color=RED)
        area = axes.get_area(graph, x_range=[-3, 3], color=BLUE, opacity=0.3)
        self.play(Create(axes), Write(labels))
        self.play(Create(graph))
        self.play(FadeIn(area))
        self.wait(2)
        pass

# if __name__ == "__main__":
    # Output configuration will be injected by the parser

    config.output_file = "example_animation2"
    config.media_dir = r"c:\Users\jyall\Documents\GitHub\htn-2025\backend\app\media\manim"


print("HELLO WORLD")
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

