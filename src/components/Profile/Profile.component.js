import React from "react";
import "./Profile.styles.scss";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";

const Profile = () => {
  return <div className="profile">
       <h2 className='profile__title'>Привет, Виталий!</h2>
       <form className="profile__form" noValidate>
         <div className="profile__form-inputs">
        <div className="profile__input-container">
          <label for="name" className="profile__form-label">Имя</label>
          <input id="name" className="profile__form-input" type='text' placeholder="Виталий" />
        </div>
        <p className='profile__form-err-message'>Что-то пошло не так...</p>
        <div className="profile__input-container">
          <label for="email" className="profile__form-label">E-mail</label>
          <input id="email" className="profile__form-input" type='text' placeholder="pochta@yandex.ru" />
        </div>
        <p className='profile__form-err-message'>Что-то пошло не так...</p>
        </div>
        <div className="profile__buttons-container">
        <Button buttonType={BUTTON_TYPE_CLASSES.link} color={BUTTON_COLOR_CLASSES.black}>Редактировать</Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.link} color={BUTTON_COLOR_CLASSES.pink}>Выйти из аккаунта</Button>
       </div>
       </form>
  </div>;
};

export default Profile;
