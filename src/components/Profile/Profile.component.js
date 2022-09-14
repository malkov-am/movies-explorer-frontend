import React, { useEffect } from "react";
import "./Profile.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import useValidation from "../../hooks/useValidation";

const Profile = () => {
  // Валидация формы
  const { values, errors, isValid, handleChange, resetForms } =
    useValidation(".profile__form");
  // Сброс полей формы при открытии
  useEffect(() => {
    resetForms();
  }, [resetForms]);

  return (
    <div className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form' noValidate>
        <div className='profile__form-inputs'>
          <div className='profile__input-container'>
            <div className='profile__input-wrapper'>
              <label htmlFor='name' className='profile__form-label'>
                Имя
              </label>
              <input
                name='name'
                id='name'
                className='profile__form-input'
                type='text'
                required
                minLength='2'
                maxLength='30'
                placeholder='Виталий'
                onChange={handleChange}
                value={values.name || ""}
              />
            </div>
            <p className='profile__form-err-message'>{errors.name}</p>
          </div>
          <div className='profile__input-container'>
            <div className='profile__input-wrapper'>
              <label htmlFor='email' className='profile__form-label'>
                E-mail
              </label>
              <input
                name='email'
                id='email'
                className='profile__form-input'
                type='email'
                required
                placeholder='pochta@yandex.ru'
                onChange={handleChange}
                value={values.email || ""}
              />
            </div>
            <p className='profile__form-err-message'>{errors.email}</p>
          </div>
        </div>
        <div className='profile__buttons-container'>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.link}
            color={BUTTON_COLOR_CLASSES.black}
            isDisabled={!isValid}
          >
            Редактировать
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.link}
            color={BUTTON_COLOR_CLASSES.pink}
          >
            Выйти из аккаунта
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
