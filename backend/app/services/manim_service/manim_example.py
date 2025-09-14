from manim import *
from manim import config
import os

class MyAnimation(Scene):
    def construct(self):
        # Create a square
        square = Square(side_length=2, color=RED, fill_opacity=0.5)
        self.play(Create(square))
        self.play(Rotate(square, angle=PI/2))
        circle = Circle(radius=2)
        self.play(MoveAlongPath(square, circle), rate_func=linear, run_time=2)
        self.play(FadeOut(square))
        # square = Square(side_length=2, color=BLUE, fill_opacity=0.5)
        # self.play(Create(square))
        # self.play(Rotate(square, angle=PI/2))
        # self.play(square.animate.shift(RIGHT*3))
        # self.play(FadeOut(square))

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