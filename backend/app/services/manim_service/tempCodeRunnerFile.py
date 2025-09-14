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
        x_range=[-2*PI, 2*PI, PI],
        y_range=[-1.5, 1.5, 0.5],
        axis_config={"color": WHITE},
        x_axis_config={"numbers_to_include": [-2*PI, -PI, 0, PI, 2*PI]},
        y_axis_config={"numbers_to_include": [-1, 0, 1]},
        )
        labels = axes.get_axis_labels(x_label="x", y_label="y")
        self.play(Create(axes), Write(labels))

        sin_graph = axes.plot(lambda x: np.sin(x), color=BLUE)
        sin_label = MathTex(r"\sin(x)").next_to(sin_graph, UP)
        self.play(Create(sin_graph), Write(sin_label))

        integral_graph = axes.plot(lambda x: -np.cos(x), color=RED)
        integral_label = MathTex(r"-\cos(x)").next_to(integral_graph, UP)
        self.play(Create(integral_graph), Write(integral_label))

        self.wait(2)
        pass

# if __name__ == "__main__":
    # Output configuration will be injected by the parser

    config.output_file = "my_animation"
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

