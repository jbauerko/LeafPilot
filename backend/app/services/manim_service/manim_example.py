from manim import *
from manim import config
import os

class MyAnimation(Scene):
    def construct(self):
        # Create a square
        axes = Axes(
            x_range=[-3, 3, 1],
            y_range=[-2, 9, 1],
            axis_config={"color": BLUE},
        )

        # Add labels
        labels = axes.get_axis_labels(x_label="x", y_label="y")

        # Show axes
        self.play(Create(axes), Write(labels))

        # List of functions to plot
        functions = [
            lambda x: x**2,
            lambda x: x**3 / 3,
            lambda x: np.sin(x) * 2,
        ]

        colors = [RED, GREEN, YELLOW]

        # Plot functions in a loop
        for func, color in zip(functions, colors):
            graph = axes.plot(func, color=color)
            self.play(Create(graph), run_time=2)
            self.wait(0.5)

        self.wait(2)

if __name__ == "__main__":
    # Configure manim to save output to the specified directory
    output_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "media", "manim")
    
    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # Configure manim settings to only save MP4
    config.output_file = "MyAnimation"
    config.media_dir = output_dir
    config.save_as_gif = False
    config.save_last_frame = False
    config.write_to_movie = True
    config.format = "mp4"
    config.save_pngs = False
    config.save_sections = False
    config.disable_caching = True
    config.flush_cache = True
    # Render the animation
    scene = MyAnimation()
    scene.render()