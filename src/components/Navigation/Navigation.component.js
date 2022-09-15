import React from "react";
import "./Navigation.styles.scss";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navigation = ({ onLinkClick }) => {
  // Хуки
  const location = useLocation();

  // Функция, возвращающая класс для ссылок меню навигации
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

  // Функция, возвращающая класс для ссылки на профиль пользователя
  const accountLinkClassName = ({ isActive }) =>
    clsx("navigation__link-account", {
      "navigation__link-account_active": isActive,
    });

  // Функция, возвращающая класс для бургерного меню
  const navigationClassName = clsx("navigation", {
    "navigation_background-color_white": location.pathname !== "/",
    "navigation_background-color_grey": location.pathname === "/",
  });

  return (
    <nav className={navigationClassName}>
      <div className='navigation__movies-links'>
        <NavLink onClick={onLinkClick} to='/' className={navLinkClassName}>
          Главная
        </NavLink>
        <NavLink
          onClick={onLinkClick}
          to='/movies'
          className={navLinkClassName}
        >
          Фильмы
        </NavLink>
        <NavLink
          onClick={onLinkClick}
          to='/saved-movies'
          className={navLinkClassName}
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <NavLink
        onClick={onLinkClick}
        to='/profile'
        className={accountLinkClassName}
      >
        Аккаунт
      </NavLink>
    </nav>
  );
};

export default Navigation;
