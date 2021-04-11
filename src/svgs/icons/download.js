import React from "react";

export default function Download({ color, ...rest }) {
  return (
    <svg
      {...rest}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 6H11V0H5V6H1L8 14L15 6ZM0 16H16V18H0V16Z" fill={color} />
    </svg>
  );
}
