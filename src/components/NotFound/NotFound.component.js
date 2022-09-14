import React from "react";
import "./NotFound.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <div className='not-found__container'>
        <p className='not-found__message'>Страница не неайдена</p>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.link}
          color={BUTTON_COLOR_CLASSES.ui}
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
