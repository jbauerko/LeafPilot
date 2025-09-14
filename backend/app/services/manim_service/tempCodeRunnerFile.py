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
        x_range=[-1, 4, 1],
        y_range=[-1, 10, 2],
        axis_config={"color": BLUE},
        )
        axes_labels = axes.get_axis_labels(x_label="x", y_label="y")
        graph = axes.plot(lambda x: x**2, color=RED)
        riemann = axes.get_riemann_rectangles(
        graph,
        x_range=[0, 3],
        dx=0.3,
        input_sample_type="left",
        fill_opacity=0.4,
        stroke_width=0,
        )
        integral_text = MathTex(r"\int_{0}^{3} x^2\,dx = 9").next_to(axes, UP)
        self.play(Create(axes), Write(axes_labels))
        self.play(Create(graph))
        self.play(FadeIn(riemann))
        self.play(Write(integral_text))
        self.wait(2)
        pass

# if __name__ == "__main__":
    # Output configuration will be injected by the parser

    config.output_file = "anim_1_67d3a8"
    config.media_dir = r"C:\Users\jyall\Documents\GitHub\htn-2025\backend\app\media\manim"


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

