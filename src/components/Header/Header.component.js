import React from "react";
import "./Header.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation.component";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const routesWithHeader = ['/', '/movies', '/saved-movies', '/profile'];

  if (routesWithHeader.includes(location.pathname)) {
  return (
    <div
      className={clsx("header", {
        header_color_gray: location.pathname === "/",
        header_color_white: location.pathname !== "/",
      })}
    >
      <Button
        buttonType={BUTTON_TYPE_CLASSES.home}
        onClick={() => navigate("/")}
      />
      <Navigation />
    </div>
  )
    };
    return null;
};

export default Header;
