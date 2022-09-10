import React from "react";
import "./Button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  sizeS: "size-s",
  sizeM: "size-m",
  sizeL: "size-l",
  link: "link",
  account: "account",
  like: "like",
  home: "home",
};

const Button = ({ buttonType, children, ...otherProps }) => {
  return (
    <button className={`button button_type_${buttonType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
