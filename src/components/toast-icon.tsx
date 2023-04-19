import * as React from "react";
import { styled, keyframes } from "goober";

import { Toast } from "../core/types";

const IndicatorWrapper = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
  font-size: 18px;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const Spinner = styled("div")`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #262626;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const enter = keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`;

export const AnimatedIconWrapper = styled("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${enter} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`;

export const ToastIcon: React.FC<{
  toast: Toast;
}> = ({ toast }) => {
  const { icon, type, theme, iconColor } = toast;

  if (icon !== undefined) {
    if (typeof icon === "string") {
      return <AnimatedIconWrapper>{icon}</AnimatedIconWrapper>;
    } else {
      return icon;
    }
  }

  if (type === "blank") {
    return null;
  }

  return (
    <IndicatorWrapper>
      {(type !== "loading" &&
        (type === "error" ? (
          <svg
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"
                fill="#000000"
                style={{
                  fill: iconColor
                    ? iconColor
                    : theme === "coloured"
                    ? "#fff"
                    : "rgb(211, 47, 47)",
                }}
              ></path>
            </g>
          </svg>
        ) : type === "info" ? (
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 52 52"
            enable-background="new 0 0 52 52"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M26,14.1c1.7,0,3,1.3,3,3s-1.3,3-3,3 s-3-1.3-3-3S24.3,14.1,26,14.1z M31,35.1c0,0.5-0.4,0.9-1,0.9h-3c-0.4,0-3,0-3,0h-2c-0.5,0-1-0.3-1-0.9v-2c0-0.5,0.4-1.1,1-1.1l0,0 c0.5,0,1-0.3,1-0.9v-4c0-0.5-0.4-1.1-1-1.1l0,0c-0.5,0-1-0.3-1-0.9v-2c0-0.5,0.4-1.1,1-1.1h6c0.5,0,1,0.5,1,1.1v8 c0,0.5,0.4,0.9,1,0.9l0,0c0.5,0,1,0.5,1,1.1V35.1z"
                style={{
                  fill: iconColor
                    ? iconColor
                    : theme === "coloured"
                    ? "#fff"
                    : "rgb(2, 136, 209)",
                }}
              ></path>{" "}
            </g>
          </svg>
        ) : type === "warning" ? (
          <svg
            fill="#000000"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M22.25,17.55,14.63,3.71a3,3,0,0,0-5.26,0L1.75,17.55A3,3,0,0,0,4.38,22H19.62a3,3,0,0,0,2.63-4.45ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18Zm1-5a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Z"
                style={{
                  fill: iconColor
                    ? iconColor
                    : theme === "coloured"
                    ? "#262626"
                    : "rgb(245, 124, 0)",
                }}
              ></path>
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="18px"
            height="18px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>check-circle-solid</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none"></rect>
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <path
                    d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM35.4,18.4l-14,14a1.9,1.9,0,0,1-2.8,0l-5.9-5.9a2.2,2.2,0,0,1-.4-2.7,2,2,0,0,1,3.1-.2L20,28.2,32.6,15.6a2,2,0,0,1,2.8,2.8Z"
                    style={{
                      fill: iconColor
                        ? iconColor
                        : theme === "coloured"
                        ? "#fff"
                        : "rgb(56, 142, 60)",
                    }}
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        ))) ||
        (type === "loading" && <Spinner></Spinner>)}
    </IndicatorWrapper>
  );
};
