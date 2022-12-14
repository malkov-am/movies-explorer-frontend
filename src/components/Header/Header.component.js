import React, { useContext, useState } from "react";
import "./Header.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation.component";
import { UserContext } from "../../contexts/User.context";

const Header = () => {
  // Переменные состояния
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Подписка на контекст
  const { isLoggedIn } = useContext(UserContext);

  // Хуки
  const location = useLocation();
  const navigate = useNavigate();

  // Маршруты, на которых должен отображаться компонент
  const routesWithHeader = ["/", "/movies", "/saved-movies", "/profile"];

  // Проверяем, соответствует ли разрешение экрана мобильной версии
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // Обработчик открытия меню
  const toggleMenu = () =>
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);

  // Задание типа и цвета иконки меню
  let menuButtonIcon;
  if (isMenuOpen) {
    menuButtonIcon =
      location.pathname === "/"
        ? BUTTON_COLOR_CLASSES.crossWhite
        : BUTTON_COLOR_CLASSES.crossBlack;
  }
  if (!isMenuOpen) {
    menuButtonIcon =
      location.pathname === "/"
        ? BUTTON_COLOR_CLASSES.burgerWhite
        : BUTTON_COLOR_CLASSES.burgerBlack;
  }

  // Обработчик закрытия меню при переходе по ссылке
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  if (routesWithHeader.includes(location.pathname.toLowerCase())) {
    return (
      <header
        className={clsx("header", {
          header_color_gray: location.pathname === "/",
          header_color_white: location.pathname !== "/",
        })}
      >
        <Button
          buttonType={BUTTON_TYPE_CLASSES.home}
          type='button'
          onClick={() => navigate("/")}
        />
        {isLoggedIn ? (
          <>
            {isMobile ? (
              <div className={clsx("overlay", isMenuOpen && "overlay_visible")}>
                <Navigation onLinkClick={handleLinkClick} />
              </div>
            ) : (
              <Navigation />
            )}
            <Button
              buttonType={BUTTON_TYPE_CLASSES.burger}
              type='button'
              color={menuButtonIcon}
              onClick={toggleMenu}
            />
          </>
        ) : (
          <nav className='header__sign-links'>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.link}
              type='button'
              color={location.pathname === "/" ? "white" : "black"}
              onClick={() => navigate("/signup")}
            >
              Регистрация
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.sizeS}
              type='button'
              onClick={() => navigate("/signin")}
            >
              Войти
            </Button>
          </nav>
        )}
      </header>
    );
  }
  return null;
};

export default Header;
