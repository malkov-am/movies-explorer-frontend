import React from "react";
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

  if (isLoggedIn) {
    return (
      <>
        <nav className='navigation'>
          <div className='navigation__links-container'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                clsx(
                  "navigation__link",
                  {
                    navigation__link_color_black: location.pathname !== "/",
                    navigation__link_color_white: location.pathname === "/",
                  },
                  {
                    navigation__link_active: isActive,
                  }
                )
              }
            >
              Главная
            </NavLink>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                clsx(
                  "navigation__link",
                  {
                    navigation__link_color_black: location.pathname !== "/",
                    navigation__link_color_white: location.pathname === "/",
                  },
                  {
                    navigation__link_active: isActive,
                  }
                )
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                clsx(
                  "navigation__link",
                  {
                    navigation__link_color_black: location.pathname !== "/",
                    navigation__link_color_white: location.pathname === "/",
                  },
                  {
                    navigation__link_active: isActive,
                  }
                )
              }
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.account}
            onClick={() => navigate("/profile")}
          >
            Аккаунт
          </Button>
        </nav>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.burger}
          color={
            location.pathname === "/"
              ? BUTTON_COLOR_CLASSES.burgerWhite
              : BUTTON_COLOR_CLASSES.burgerBlack
          }
          onClick={() => {
            const buttonsContainer = document.querySelector(".navigation");
            const linksContainer = document.querySelector(
              ".navigation__links-container"
            );
            const burgerBtn = document.querySelector(".button_type_burger");
            buttonsContainer.classList.toggle("navigation__burger-menu");
            linksContainer.classList.toggle(
              "navigation__burger-links-container"
            );
            burgerBtn.classList.toggle("button_type_burger_active");
          }}
        />
      </>
    );
  } else {
    return (
      <nav className='navigation__sign-buttons-container'>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.link}
          color={location.pathname === "/" ? "white" : "black"}
          onClick={() => navigate("/signup")}
        >
          Регистрация
        </Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.sizeS}
          onClick={() => navigate("/signin")}
        >
          Войти
        </Button>
      </nav>
    );
  }
};

export default Navigation;
