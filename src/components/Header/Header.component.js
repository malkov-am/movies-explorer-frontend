import React from "react";
import "./Header.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = true;

  let buttons;
  if (isLoggedIn) {
    buttons = (
      <>
        <div className='header__buttons-container'>
          <div className='header__links-container'>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.link}
              color={
                location.pathname === "/"
                  ? BUTTON_COLOR_CLASSES.white
                  : BUTTON_COLOR_CLASSES.black
              }
              onClick={() => navigate("/movies")}
            >
              Фильмы
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.link}
              color={
                location.pathname === "/"
                  ? BUTTON_COLOR_CLASSES.white
                  : BUTTON_COLOR_CLASSES.black
              }
              onClick={() => navigate("/saved-movies")}
            >
              Сохраненные фильмы
            </Button>
          </div>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.account}
            onClick={() => navigate("/profile")}
          >
            Аккаунт
          </Button>
        </div>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.burger}
          color={
            location.pathname === "/"
              ? BUTTON_COLOR_CLASSES.burgerWhite
              : BUTTON_COLOR_CLASSES.burgerBlack
          }
          onClick={() => {
            const buttonsContainer = document.querySelector(
              ".header__buttons-container"
            );
            const linksContainer = document.querySelector(
              ".header__links-container"
            );
            const burgerBtn = document.querySelector(".button_type_burger");
            buttonsContainer.classList.toggle("header__burger-menu");
            linksContainer.classList.toggle("header__burger-links-container");
            burgerBtn.classList.toggle("button_type_burger_active");
          }}
        />
      </>
    );
  } else {
    buttons = (
      <>
        <div className='header__sign-buttons-container'>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.link}
            color={location.pathname === "/" ? "white" : "black"}
          >
            Регистрация
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.sizeS}>Войти</Button>
        </div>
      </>
    );
  }

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
      {buttons}
    </div>
  );
};

export default Header;
