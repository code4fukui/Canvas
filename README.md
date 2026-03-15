# Canvas

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A utility library for working with HTML canvas.

## Features
- `Canvas.encodeJPEG(imgdata, quality)`: Encodes an image data object as a JPEG with the specified quality.
- `Canvas.encodePNG(imgdata)`: Encodes an image data object as a PNG.

## Usage

```js
import { html2image } from "./html2image.js";
import { downloadFile } from "https://js.sabae.cc/downloadFile.js";
import { Canvas } from "https://code4fukui.github.io/Canvas/Canvas.js";

btn.onclick = async () => {
  const imgdata = await html2image(document.body);
  const jpg = Canvas.encodeJPEG(imgdata);
  console.log(jpg);
  downloadFile("screenshot.jpg", jpg);
};
```

## License
MIT License