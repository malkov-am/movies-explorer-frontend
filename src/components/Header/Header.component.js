import React from "react";
import "./Header.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();
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
            >
              Сохраненные фильмы
            </Button>
          </div>
          <Button buttonType={BUTTON_TYPE_CLASSES.account}>Аккаунт</Button>
        </div>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.burger}
          color={
            location.pathname === "/"
              ? BUTTON_COLOR_CLASSES.burgerWhite
              : BUTTON_COLOR_CLASSES.burgerBlack
          }
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
      <Button buttonType={BUTTON_TYPE_CLASSES.home} />
      {buttons}
    </div>
  );
};

export default Header;
