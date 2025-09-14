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
        x_range=[-1, 5, 1],
        y_range=[-1, 20, 5],
        axis_config={"color": BLUE},
        )
        graph = axes.plot(lambda x: x**2, color=RED)
        graph_label = axes.get_graph_label(graph, label="x^2")
        a_tracker = ValueTracker(0)
        vertical_line = always_redraw(lambda: axes.get_vertical_line(
        axes.c2p(a_tracker.get_value(), 0)
        )[0].set_color(YELLOW))
        area = always_redraw(lambda: axes.get_area(
        lambda x: x**2,
        x_range=[0, a_tracker.get_value()],
        color=GREEN,
        opacity=0.5
        ))
        integral_tex = always_redraw(lambda: MathTex(
        r"\int_{0}^{" + f"{a_tracker.get_value():.2f}" + r"} x^2\,dx = " + f"{(a_tracker.get_value()**3)/3:.2f}"
        ).to_corner(UP+RIGHT))
        self.play(Create(axes), Create(graph), Write(graph_label))
        self.play(Create(area), Create(vertical_line), Write(integral_tex))
        self.play(a_tracker.animate.set_value(4), run_time=5, rate_func=linear)
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

