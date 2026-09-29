"""Align generated mascot poses and save compact, transparent web assets."""

import sys
from pathlib import Path

from PIL import Image


def main() -> None:
    if len(sys.argv) != 5:
        raise SystemExit("usage: prepare-mascot.py IDLE WAVE STRUM OUTPUT_DIR")

    names = ("idle", "wave", "strum")
    images = [Image.open(path).convert("RGBA") for path in sys.argv[1:4]]
    for image in images:
        # Generated transparent PNGs can contain near-invisible stray pixels.
        # Use a hard alpha edge to keep the small sprite crisp and aligned.
        image.putalpha(image.getchannel("A").point(lambda value: 255 if value >= 128 else 0))
    if len({image.size for image in images}) != 1:
        raise SystemExit("mascot poses must use the same canvas size")

    boxes = [image.getchannel("A").getbbox() for image in images]
    if any(box is None for box in boxes):
        raise SystemExit("all mascot poses need visible pixels")

    left = min(box[0] for box in boxes)
    top = min(box[1] for box in boxes)
    right = max(box[2] for box in boxes)
    bottom = max(box[3] for box in boxes)
    width, height = right - left, bottom - top
    side = max(width, height) + 100
    offset = ((side - width) // 2, (side - height) // 2)
    output = Path(sys.argv[4])
    output.mkdir(parents=True, exist_ok=True)

    for name, image in zip(names, images):
        frame = Image.new("RGBA", (side, side), (0, 0, 0, 0))
        frame.alpha_composite(image.crop((left, top, right, bottom)), offset)
        frame = frame.resize((256, 256), Image.Resampling.NEAREST)
        frame.save(output / f"{name}.webp", "WEBP", lossless=True, method=6)


if __name__ == "__main__":
    main()
