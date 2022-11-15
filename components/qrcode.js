import { createQR } from "../lib/createQR";
export default function qrcode({
  content,
  border = 0,
  quality = 0,
  lightColor = "white",
  darkColor = "black",
  size = 100,
}) {
  const qr = createQR(content, border, quality);
  const vb = (qr.size + 2 * border).toString();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox={"0 0 " + vb + " " + vb}
      stroke="none"
      width={size}
      height={size}
      className="mx-auto"
    >
      <rect width="100%" height="100%" fill={lightColor} />
      <path d={qr.parts.join(" ")} fill={darkColor} />
    </svg>
  );
}
