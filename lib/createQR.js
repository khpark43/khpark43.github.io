import qrcodegen from "./qrcode";

export function createQR(text, border, errorIndex) {
  const errCorLvl = [
    qrcodegen.QrCode.Ecc.LOW,
    qrcodegen.QrCode.Ecc.MEDIUM,
    qrcodegen.QrCode.Ecc.QUARTILE,
    qrcodegen.QrCode.Ecc.HIGH,
  ]; // Error correction level
  const qr = qrcodegen.QrCode.encodeText(text, errCorLvl[errorIndex]);

  let parts = [];
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.getModule(x, y))
        parts.push(`M${x + border},${y + border}h1v1h-1z`);
    }
  }

  return { parts: parts, size: qr.size };
}
