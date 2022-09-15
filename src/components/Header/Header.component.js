import React, { useState } from "react";
import "./Header.styles.scss";
import Button, { BUTTON_COLOR_CLASSES, BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation.component";

const Header = () => {
  // Переменные состояния
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = true;

  // Хуки
  const location = useLocation();
  const navigate = useNavigate();

  // Маршруты, на которых должен отображаться компонент
  const routesWithHeader = ["/", "/movies", "/saved-movies", "/profile"];

  // Проверяем, соответствует ли разрешение экрана мобильной версии
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // Обработчик открытия меню
  const toggleMenu = () => isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  
// Задание типа и цвета иконки меню
  let menuButtonIcon;
  if (isMenuOpen) {
    menuButtonIcon = location.pathname === "/"
    ? BUTTON_COLOR_CLASSES.crossWhite
    : BUTTON_COLOR_CLASSES.crossBlack
  }
  if (!isMenuOpen) {
    menuButtonIcon = location.pathname === "/"
    ? BUTTON_COLOR_CLASSES.burgerWhite
    : BUTTON_COLOR_CLASSES.burgerBlack
  }

  const handleLinkClick = (link) => {
    navigate(link);
    setMenuOpen(false);
  }

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
      {(isLoggedIn) ? (
      <>
      {isMobile ? (
        <div className={clsx('overlay', isMenuOpen && 'overlay_visible')}>
      <Navigation />
      </div>
      ) :  <Navigation handleLinkClick={handleLinkClick} />}
        <Button
          buttonType={BUTTON_TYPE_CLASSES.burger}
          color={menuButtonIcon}
          onClick={toggleMenu}
        />
      </>
    ) : (
      <nav className='navigation__sign-links'>
        <Button buttonType={BUTTON_TYPE_CLASSES.link} color={location.pathname === "/" ? "white" : "black"} onClick={() => navigate("/signup")}>Регистрация</Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.sizeS} onClick={() => navigate("/signin")}>Войти</Button>
      </nav>
    )}
      </div>
    );
  }
  return null;
};

export default Header;
