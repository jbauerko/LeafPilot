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
        axes = Axes(x_range=[-3,3,1], y_range=[-1,9,1], axis_config={'color':WHITE})
        labels = axes.get_axis_labels(x_label='x', y_label='y')
        graph = axes.plot(lambda x: x**2, color=BLUE)
        area = axes.get_area(graph, x_range=[-2,2], color=BLUE, opacity=0.3)
        integral_tex = MathTex("\\int_{-2}^{2} x^{2}\\,dx = \\frac{8}{3}").next_to(axes, UP)
        riemann = axes.get_riemann_rectangles(graph, x_range=[-2,2], dx=0.4, input_sample_type='left')
        self.play(Create(axes), Write(labels))
        self.play(Create(graph))
        self.play(FadeIn(area))
        self.wait(0.5)
        self.play(Write(integral_tex))
        self.wait(1)
        self.play(Create(riemann))
        self.wait(2)
        self.play(FadeOut(VGroup(axes, graph, area, riemann, labels, integral_tex)))
        pass

# if __name__ == "__main__":
    # Output configuration will be injected by the parser

    config.output_file = "anim_1_ed774a"
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

