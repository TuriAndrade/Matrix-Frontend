import React from "react";

export default function Square({ color, ...rest }) {
  return (
    <svg
      {...rest}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H12C13.1046 1 14 1.89543 14 3V14H1V1Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}
