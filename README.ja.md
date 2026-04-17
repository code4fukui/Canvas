# Canvas

HTML Canvas APIを使用して `ImageData` オブジェクトを様々な画像フォーマットにエンコードするための、軽量なユーティリティライブラリです。

## API

### `Canvas.encodeJPEG(imageData, [quality])`

`ImageData` オブジェクトをJPEG画像にエンコードします。

-   **`imageData`**: エンコード対象の `ImageData` オブジェクト。
-   **`quality`** (任意): `0.0` から `1.0` までの数値で画質を指定します。デフォルトは `0.9` です。
-   **戻り値**: JPEGファイルのバイナリデータを含む `Uint8Array`。

### `Canvas.encodePNG(imageData)`

`ImageData` オブジェクトをPNG画像にエンコードします。

-   **`imageData`**: エンコード対象の `ImageData` オブジェクト。
-   **戻り値**: PNGファイルのバイナリデータを含む `Uint8Array`。

## 要件

-   モダンなウェブブラウザ環境。
-   このライブラリは以下のライブラリに依存しています:
    -   [`Base64.js`](https://code4fukui.github.io/Base64/Base64.js)

## 使用方法

`Canvas` モジュールをプロジェクトに直接インポートします。

```js
import { Canvas } from "https://code4fukui.github.io/Canvas/Canvas.js";

// 'ctx' は <canvas> 要素から取得した2Dレンダリングコンテキストとします
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// ImageDataを品質85%のJPEGにエンコード
const jpegData = Canvas.encodeJPEG(imageData, 0.85); // Uint8Arrayが返ります

// ImageDataをPNGにエンコード
const pngData = Canvas.encodePNG(imageData); // Uint8Arrayが返ります
```

### 例: スクリーンショットを撮影してダウンロードする

この例では、ウェブページの要素を画像としてキャプチャし、エンコードしてダウンロードをトリガーするまでの一連の流れを示します。デモンストレーションのため、外部のヘルパー関数（`html2image` と `downloadFile`）を使用しています。

```js
import { html2image } from "./html2image.js"; // 例のヘルパー関数
import { downloadFile } from "https://js.sabae.cc/downloadFile.js"; // 例のヘルパー関数
import { Canvas } from "https://code4fukui.github.io/Canvas/Canvas.js";

btn.onclick = async () => {
  // 1. DOMからImageDataオブジェクトをキャプチャ
  const imgdata = await html2image(document.body);

  // 2. ImageDataをJPEGとしてエンコード
  const jpg = Canvas.encodeJPEG(imgdata);

  // 3. 結果のファイルのダウンロードをトリガー
  downloadFile("screenshot.jpg", jpg);
};
```

## ライセンス

MITライセンス — [LICENSE](LICENSE) を参照。