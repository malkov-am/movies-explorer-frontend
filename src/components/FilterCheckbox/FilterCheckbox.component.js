import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/Movies.context";
import "./FilterCheckbox.styles.scss";

const FilterCheckbox = ({ children }) => {
  const { isShort, setIsShort } = useContext(MoviesContext);

  const handleCheckboxChange = (evt) => evt.target.checked ? setIsShort(true) : setIsShort(false);

  return (
    <label className='filter'>
      <input className='filter__checkbox' type='checkbox' defaultChecked={isShort} onChange={handleCheckboxChange} />
      <span className='filter__pseudo-item' />
      <span className='filter__label-text' />
      {children}
    </label>
  );
};

export default FilterCheckbox;
