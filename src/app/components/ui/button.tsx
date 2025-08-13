import { div } from "framer-motion/client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  typeStyle?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
};

const defaultStyles = {
  primary:
    "bg-main-color-60 text-text-color-100 hover:bg-secondary-color-60 hover:text-text-color-10 cursor-pointer",
  secondary: "bg-text-color-5 text-text-color-100 hover:bg-gray-300",
};

const sizeStyles = {
  small: "text-sm px-2 py-1.5",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
};

const disabledStyles = "opacity-50 cursor-not-allowed hover:none";

export default function Button({
  typeStyle = "primary",
  size = "medium",
  className = "",
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const baseClass = `
    rounded-md font-semibold w-fit transition-all duration-200 block -translate-x-[2px] 
    -translate-y-[2px] border-1 border-text-color-100 hover:-translate-y-[3px] 
    hover:-translate-x-1 active:translate-x-0 active:translate-y-0
    ${defaultStyles[typeStyle]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ""}
    ${className}
  `;

  return (
    <button
      disabled={disabled}
      {...rest}
      className="rounded-md bg-text-color-100"
    >
      <div className={baseClass}>{children}</div>
    </button>
  );
}
