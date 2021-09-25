# Canvas

utility using HTML canvas

## api

- Canvas.encodeJPEG(imgdata, quality)
- Canvas.encodePNG(imgadta)
## usage

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
