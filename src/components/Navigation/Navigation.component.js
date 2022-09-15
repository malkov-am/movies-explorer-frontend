import React from "react";
import "./Navigation.styles.scss";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navigation = ({ handleLinkClick }) => {
  const location = useLocation();

  const navLinkClassName = ({ isActive }) =>
  clsx(
    "navigation__link",
    {
      navigation__link_color_black: location.pathname !== "/",
      navigation__link_color_white: location.pathname === "/",
    },
    {
      navigation__link_active: isActive,
    }
  );

  const navigationClassName = clsx("navigation", {
      "navigation_background-color_white": location.pathname !== "/",
      "navigation_background-color_grey": location.pathname === "/",
    });

    return (
        <nav className={navigationClassName}>
          <div className='navigation__movies-links'>
            <NavLink onClick={() => handleLinkClick("/")} to='/' className={navLinkClassName}>Главная</NavLink>
            <NavLink onClick={() => handleLinkClick("/movies")} to='/movies' className={navLinkClassName}>Фильмы</NavLink>
            <NavLink onClick={() => handleLinkClick("/saved-movies")} to='/saved-movies' className={navLinkClassName}>Сохраненные фильмы</NavLink>
          </div>
          <Button buttonType={BUTTON_TYPE_CLASSES.account} onClick={() => handleLinkClick("/profile")}>Аккаунт</Button>
          </nav>
)
};

export default Navigation;
