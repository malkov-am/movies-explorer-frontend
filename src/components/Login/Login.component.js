import React from "react";
import "./Login.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import SignForm from "../SignForm/SignForm.component";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <SignForm title='Рады видеть!'>
      <div>
        <label for='email' className='sign__form-label'>
          E-mail
        </label>
        <input name='email' className='sign__form-input' type='text' />
        <p className='sign__form-err-message'>Что-то пошло не так...</p>
        <label for='password' className='sign__form-label'>
          Пароль
        </label>
        <input name='password' className='sign__form-input' type='password' />
        <p className='sign__form-err-message'>Что-то пошло не так...</p>
      </div>
      <div className='sign__form-buttons'>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.sizeL}
          color={BUTTON_COLOR_CLASSES.white}
        >
          Войти
        </Button>
        <p className='sign__form-invite'>
          Ещё не зарегистрированы?
          <Link className='sign__form-link' to='/signup'>
            Регистрация
          </Link>
        </p>
      </div>
    </SignForm>
  );
};

export default Login;
