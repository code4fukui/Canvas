# Canvas

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight utility library for encoding `ImageData` objects into different image formats using the HTML Canvas API.

## API

### `Canvas.encodeJPEG(imageData, [quality])`

Encodes an `ImageData` object into a JPEG image.

-   **`imageData`**: The `ImageData` object to encode.
-   **`quality`** (optional): A number between `0.0` and `1.0` indicating the image quality. Defaults to `0.9`.
-   **Returns**: A `Uint8Array` containing the binary data of the JPEG file.

### `Canvas.encodePNG(imageData)`

Encodes an `ImageData` object into a PNG image.

-   **`imageData`**: The `ImageData` object to encode.
-   **Returns**: A `Uint8Array` containing the binary data of the PNG file.

## Requirements

-   A modern web browser environment.
-   This library has a dependency on:
    -   [`Base64.js`](https://code4fukui.github.io/Base64/Base64.js)

## Usage

Import the `Canvas` module directly into your project.

```js
import { Canvas } from "https://code4fukui.github.io/Canvas/Canvas.js";

// Assuming 'ctx' is a 2D rendering context from a <canvas> element
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// Encode the ImageData into a JPEG with 85% quality
const jpegData = Canvas.encodeJPEG(imageData, 0.85); // Returns a Uint8Array

// Encode the ImageData into a PNG
const pngData = Canvas.encodePNG(imageData); // Returns a Uint8Array
```

### Example: Taking and Downloading a Screenshot

This example demonstrates a complete workflow: capturing a webpage element as an image, encoding it, and triggering a download. It uses external helpers (`html2image` and `downloadFile`) for demonstration purposes.

```js
import { html2image } from "./html2image.js"; // Example helper
import { downloadFile } from "https://js.sabae.cc/downloadFile.js"; // Example helper
import { Canvas } from "https://code4fukui.github.io/Canvas/Canvas.js";

btn.onclick = async () => {
  // 1. Capture an ImageData object from the DOM
  const imgdata = await html2image(document.body);

  // 2. Encode the ImageData as a JPEG
  const jpg = Canvas.encodeJPEG(imgdata);

  // 3. Trigger a download of the resulting file
  downloadFile("screenshot.jpg", jpg);
};
```

## License

MIT License — see [LICENSE](LICENSE).