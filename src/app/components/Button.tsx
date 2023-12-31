import style from "./Button.module.css";
import React from "react";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
  onSubmit?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};
const Button = ({
  text,
  isLoading,
  onClick,
  type = "button",
  onSubmit,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={style.button}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
