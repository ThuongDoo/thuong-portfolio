import React from "react";

export default function CircleTextSVG({
  text = "React",
  separator = ".",
  radius = 120,
  fontSize = 14,
  spacingMultiplier = 1.8,
  textColor = "white",
}) {
  const circumference = 2 * Math.PI * radius;
  const avgCharWidth = fontSize * 0.6;
  const estimatedWordLength =
    (text.length + 1) * avgCharWidth * spacingMultiplier;
  const repeat = Math.floor(circumference / estimatedWordLength);

  let repeatedText = text;

  if (repeat >= 2) {
    const parts = [];

    for (let i = 0; i < repeat; i++) {
      parts.push(text);
      parts.push(separator);
    }

    // Thêm một dấu cách vào cuối để tạo khoảng
    parts.push("\u2002");

    repeatedText = parts.join(""); // không dùng dấu cách
  }

  return (
    <div className="w-[300px] h-[300px] mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="autoCirclePath"
            d={`
              M 150,150
              m -${radius},0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
            fill="none"
          />
        </defs>
        <text
          fill={textColor}
          fontSize={fontSize}
          textAnchor="middle"
          letterSpacing="1px" // cân chỉnh spacing
        >
          <textPath
            href="#autoCirclePath"
            startOffset="50%"
            textLength={circumference}
          >
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
