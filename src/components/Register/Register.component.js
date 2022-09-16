import React, { useEffect } from "react";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import SignForm from "../SignForm/SignForm.component";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";

const Register = () => {
  // Валидация формы
  const { values, errors, isValid, handleChange, resetForms } =
    useValidation(".sign__form");
  // Сброс полей формы при открытии
  useEffect(() => {
    resetForms();
  }, [resetForms]);

  return (
    <SignForm title='Добро пожаловать!'>
      <div>
        <label htmlFor='name' className='sign__form-label'>
          Имя
        </label>
        <input
          name='name'
          id='name'
          className='sign__form-input'
          type='text'
          required
          minLength='2'
          maxLength='30'
          onChange={handleChange}
          value={values.name || ""}
        />
        <p className='sign__form-err-message'>{errors.name}</p>
        <label htmlFor='email' className='sign__form-label'>
          E-mail
        </label>
        <input
          name='email'
          id='email'
          className='sign__form-input'
          type='email'
          required
          onChange={handleChange}
          value={values.email || ""}
        />
        <p className='sign__form-err-message'>{errors.email}</p>
        <label htmlFor='password' className='sign__form-label'>
          Пароль
        </label>
        <input
          name='password'
          id='password'
          className='sign__form-input'
          type='password'
          required
          minLength='6'
          maxLength='30'
          onChange={handleChange}
          value={values.password || ""}
        />
        <p className='sign__form-err-message'>{errors.password}</p>
      </div>
      <div className='sign__form-buttons'>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.sizeL}
          type='submit'
          color={BUTTON_COLOR_CLASSES.white}
          isDisabled={!isValid}
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
