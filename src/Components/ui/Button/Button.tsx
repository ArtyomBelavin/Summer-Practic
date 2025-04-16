import React, { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={isActive ? "ui__btn--active" : "ui__btn"}
    >
      {children}
    </button>
  );
};
