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
  burger: "burger",
};

export const BUTTON_COLOR_CLASSES = {
  black: "black",
  white: "white",
  pink: "pink",
  burgerBlack: "burger-black",
  burgerWhite: "burger-white",
};

const Button = ({ buttonType, color, children, ...otherProps }) => {
  return (
    <button
      className={clsx("button", `button_type_${buttonType}`, {
        button_color_black: color === "black",
        button_color_white: color === "white",
        button_color_pink: color === "pink",
        "button_color_burger-black": color === "burger-black",
        "button_color_burger-white": color === "burger-white",
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
