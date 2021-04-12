import React from "react";

export default function Class({ color, ...rest }) {
  return (
    <svg
      {...rest}
      viewBox="0 0 40 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0001 22.6875C12.8507 22.6875 12.7013 22.7101 12.5588 22.7578C11.7488 23.0291 10.8969 23.2031 10.0001 23.2031C9.1032 23.2031 8.25133 23.0291 7.44071 22.7578C7.29821 22.7101 7.14946 22.6875 7.00008 22.6875C3.12134 22.6875 -0.020524 25.9411 0.000100967 29.9462C0.00885095 31.6388 1.35822 33 3.00009 33H17.0001C18.6419 33 19.9913 31.6388 20.0001 29.9462C20.0207 25.9411 16.8788 22.6875 13.0001 22.6875ZM10.0001 20.625C13.3138 20.625 16.0001 17.8548 16.0001 14.4375C16.0001 11.0202 13.3138 8.25 10.0001 8.25C6.68633 8.25 4.00009 11.0202 4.00009 14.4375C4.00009 17.8548 6.68633 20.625 10.0001 20.625ZM37 0H13.0001C11.3457 0 10.0001 1.43408 10.0001 3.19623V6.1875C11.4638 6.1875 12.8188 6.62449 14.0001 7.33477V4.125H36V22.6875H32V18.5625H24V22.6875H19.2351C20.4288 23.7632 21.305 25.1838 21.7157 26.8125H37C38.6544 26.8125 40 25.3784 40 23.6163V3.19623C40 1.43408 38.6544 0 37 0Z"
        fill={color}
      />
    </svg>
  );
}