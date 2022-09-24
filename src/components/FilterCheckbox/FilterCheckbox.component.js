import React from "react";
import "./FilterCheckbox.styles.scss";

const FilterCheckbox = ({ children, isShort, setIsShort }) => {
  const handleCheckboxChange = (evt) =>
    evt.target.checked ? setIsShort(true) : setIsShort(false);

  return (
    <label className='filter'>
      <input
        className='filter__checkbox'
        type='checkbox'
        defaultChecked={isShort}
        onChange={handleCheckboxChange}
      />
      <span className='filter__pseudo-item' />
      <span className='filter__label-text' />
      {children}
    </label>
  );
};

export default FilterCheckbox;
