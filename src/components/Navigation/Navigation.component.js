import React, { useState } from "react";
import "./Navigation.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = true;
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState('false');

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

  const toggleMenu = () => isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);

  if (isLoggedIn) {
    return (
      <>
        <nav className='navigation'>
          <div className='navigation__movies-links'>
            <NavLink to='/movies' className={navLinkClassName}>Фильмы</NavLink>
            <NavLink to='/saved-movies' className={navLinkClassName}>Сохраненные фильмы</NavLink>
          </div>
          <Button buttonType={BUTTON_TYPE_CLASSES.account} onClick={() => navigate("/profile")}>Аккаунт</Button>
        </nav>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.burger}
          color={
            location.pathname === "/"
              ? BUTTON_COLOR_CLASSES.burgerWhite
              : BUTTON_COLOR_CLASSES.burgerBlack
          }
          onClick={toggleMenu}
        />
      </>
    );
  }
  if (!isLoggedIn) {
    return (
      <nav className='navigation__sign-links'>
        <Button buttonType={BUTTON_TYPE_CLASSES.link} color={location.pathname === "/" ? "white" : "black"} onClick={() => navigate("/signup")}>Регистрация</Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.sizeS} onClick={() => navigate("/signin")}>Войти</Button>
      </nav>
    );
  }
};

export default Navigation;
