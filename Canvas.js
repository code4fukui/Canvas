import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

const encodeImage = (img, mimeType = "image/jpeg", quality = 0.9) => {
  const canvas = document.createElement("canvas");
  canvas.width  = img.width;
  canvas.height = img.height;
  const g = canvas.getContext("2d");
  g.putImageData(img, 0, 0);
  const d = canvas.toDataURL(mimeType, quality);
  return Base64.decode(d.substring(d.indexOf(",") + 1));
};

const Canvas = {};

Canvas.encodeJPEG = (imgdata, quality = 0.9) => {
  return encodeImage(imgdata, "image/jpeg", quality)
};
Canvas.encodePNG = (imgdata) => {
  return encodeImage(imgdata, "image/png")
};

export { Canvas };

