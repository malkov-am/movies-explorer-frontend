import React from "react";
import "./FilterCheckbox.styles.scss";

const Switch = ({ children }) => {
  return (
    <>
      <label class='filter'>
        <input className='filter__checkbox' type='checkbox' />
        <span className='filter__pseudo-item' />
        <span className='filter__label-text' />
        {children}
      </label>
    </>
  );
};

export default Switch;