import clsx from "clsx";
import React from "react";
import "./Button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  sizeS: "size-s",
  sizeM: "size-m",
  sizeL: "size-l",
  link: "link",
  account: "account",
  like: "like",
  dislike: "dislike",
  home: "home",
  more: "more",
};

const Button = ({ buttonType, color, children, ...otherProps }) => {
  return (
    <button
      className={clsx("button", `button_type_${buttonType}`, {
        button_color_black: color === "black",
        button_color_white: color === "white",
        button_color_pink: color === "pink",
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
