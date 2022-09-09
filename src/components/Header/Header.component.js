import React from "react";
import "./Header.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const Header = () => {
  return (
    <div className='header'>
      <Button buttonType={BUTTON_TYPE_CLASSES.home} />
      <div className='header__buttons-container'>
        <Button buttonType={BUTTON_TYPE_CLASSES.link}>Регистрация</Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.sizeS}>Войти</Button>
      </div>
    </div>
  );
};

export default Header;
