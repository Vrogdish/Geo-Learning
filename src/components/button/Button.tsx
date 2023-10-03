import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  theme?:  "confirm" | "alert" | "disabled";
  type?: "button" | "submit";
  action?: () => void;
}

export default function Button({
  children,
  className,
  theme = "confirm",
  type = "button",
  action,
}: Props) {
  let colorStyle = "";
  switch (theme) {
    case "confirm":
      colorStyle = "bg-green-500 text-white ";
      break;
    case "alert":
      colorStyle = " bg-red-500  text-white ";
      break;
    case "disabled":
      colorStyle = "bg-gray-300  text-white cursor-default";
      break;
    default:
      break;
  }

  return (
    <button
      className={`block px-10 py-2 border-2 font-bold shadow-2xl rounded-full  ${colorStyle} ${className}`}
      type={type}
      onClick={action}
    >
      {children}
    </button>
  );
}
