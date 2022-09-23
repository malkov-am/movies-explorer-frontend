import React, { useContext, useEffect, useState } from "react";
import "./Profile.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import useValidation from "../../hooks/useValidation";
import { UserContext } from "../../contexts/User.context";
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from "../../utils/constants";

const Profile = ({ onLogout, onUpdateProfile }) => {
  // Переменные состояния
  const [isUserDataChanged, setUserDataChanged] = useState(false);
  // Подписка на контекст
  const { currentUser } = useContext(UserContext);
  const { name, email } = currentUser;

  // Валидация формы
  const { values, errors, isValid, handleChange, resetForms } =
    useValidation(".profile__form");

  // Изменились ли данные в форме
  useEffect(() => {
    values.name === name && values.email === email
      ? setUserDataChanged(false)
      : setUserDataChanged(true);
  }, [values]);

  // Подстановка данных в форму
  useEffect(() => {
    currentUser && resetForms(currentUser, {}, true);
  }, [currentUser, resetForms]);

  // Обработчик обновления профиля
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateProfile({ name: values.name, email: values.email });
  };

  return (
    <div className='profile'>
      <h2 className='profile__title'>Привет, {name}!</h2>
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
                minLength={NAME_MIN_LENGTH}
                maxLength={NAME_MAX_LENGTH}
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
                onChange={handleChange}
                value={values.email || ""}
                pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
              />
            </div>
            <p className='profile__form-err-message'>{errors.email}</p>
          </div>
        </div>
        <div className='profile__buttons-container'>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.link}
            type='submit'
            color={BUTTON_COLOR_CLASSES.black}
            isDisabled={!isUserDataChanged || !isValid}
            onClick={handleSubmit}
          >
            Редактировать
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.link}
            type='button'
            color={BUTTON_COLOR_CLASSES.pink}
            onClick={onLogout}
          >
            Выйти из аккаунта
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
