import React from 'react';
import './SignForm.styles.scss';
import Button, {
    BUTTON_COLOR_CLASSES,
    BUTTON_TYPE_CLASSES,
  } from "../Button/Button.component";
import { useNavigate } from 'react-router-dom';

const SignForm = ({ title, buttonTitle, children }) => {
    const navigate = useNavigate();

    return (
        <div className='sign'>
            <Button buttonType={BUTTON_TYPE_CLASSES.home} onClick={() => navigate('/')} />
            <h2 className='sign__title'>{title}</h2>
            <form className='sign__form' noValidate>
            {children}
            <Button buttonType={BUTTON_TYPE_CLASSES.sizeL} color={BUTTON_COLOR_CLASSES.white}>{buttonTitle}</Button>
            </form>
        </div>
    );
};

export default SignForm;
