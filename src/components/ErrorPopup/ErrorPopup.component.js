import clsx from "clsx";
import React from "react";
import "./ErrorPopup.styles.scss";

const ErrorPopup = ({ message, isActive }) => {
  return (
    <p className={clsx("error-popup", isActive && "error-popup_active")}>
      {message}
    </p>
  );
};

export default ErrorPopup;
