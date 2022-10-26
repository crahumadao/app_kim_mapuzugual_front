import os
import subprocess

os.chdir(os.getcwd())
for ogg in [x for x in os.listdir() if x.endswith('.ogg')]:
  subprocess.run(["ffmpeg", "-i", ogg, ogg.split(".")[0]+".mp3"])
