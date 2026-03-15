# Canvas

HTML5 Canvasを操作するためのユーティリティライブラリです。

## 機能

- `Canvas.encodeJPEG(imgdata, quality)`: 画像データをJPEGに変換し、品質を指定して出力します。
- `Canvas.encodePNG(imgdata)`: 画像データをPNGに変換して出力します。

## 使い方

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

## ライセンス

MIT License