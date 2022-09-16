import React from "react";
import "./SignForm.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import { useNavigate } from "react-router-dom";

const SignForm = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div className='sign'>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.home}
        type='button'
        onClick={() => navigate("/")}
      />
      <h2 className='sign__title'>{title}</h2>
      <form className='sign__form' noValidate>
        {children}
      </form>
    </div>
  );
};

export default SignForm;
