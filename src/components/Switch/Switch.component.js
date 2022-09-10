import React from "react";
import "./Switch.styles.scss";

const Switch = ({ children }) => {
  return (
    <>
      <label class='switch'>
        <input className='switch__checkbox' type='checkbox' />
        <span className='switch__pseudo-item' />
        <span className='switch__label-text' />
        {children}
      </label>
    </>
  );
};

export default Switch;
