import React from 'react';
import './Register.styles.scss';
import Button, {
    BUTTON_COLOR_CLASSES,
    BUTTON_TYPE_CLASSES,
  } from "../Button/Button.component";
  import SignForm from "../SignForm/SignForm.component";
  import { Link } from "react-router-dom";

const Register = () => {
    return (
        <SignForm title='Добро пожаловать!'>
        <div>
        <label for='name' className='sign__form-label'>
            Имя
          </label>
          <input id='name' className='sign__form-input' type='text' />
          <p className='sign__form-err-message'>Что-то пошло не так...</p>
          <label for='email' className='sign__form-label'>
            E-mail
          </label>
          <input id='email' className='sign__form-input' type='text' />
          <p className='sign__form-err-message'>Что-то пошло не так...</p>
          <label for='password' className='sign__form-label'>
            Пароль
          </label>
          <input id='password' className='sign__form-input' type='password' />
          <p className='sign__form-err-message'>Что-то пошло не так...</p>
        </div>
        <div className='sign__form-buttons'>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.sizeL}
            color={BUTTON_COLOR_CLASSES.white}
          >
            Зарегистрироваться
          </Button>
          <p className='sign__form-invite'>
            Уже зарегистрированы?
            <Link className='sign__form-link' to='/signin'>
              Войти
            </Link>
          </p>
        </div>
      </SignForm>
    );
};

export default Register;
