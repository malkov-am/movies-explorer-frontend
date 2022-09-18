import React, { useState } from "react";
import "./SearchForm.styles.scss";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.component";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    onSubmit(search);
  };

  return (
    <div className='search'>
      <div className='search__container'>
        <form
          className='search__form'
          minLength='1'
          onSubmit={handleSearch}
          noValidate
        >
          <input
            name='search'
            id='search'
            className='search__form-input'
            type='text'
            required
            placeholder='Фильм'
            onChange={handleChangeSearch}
            value={search}
          />
          <Button
            buttonType={BUTTON_TYPE_CLASSES.sizeM}
            type='submit'
            color={BUTTON_COLOR_CLASSES.white}
          >
            Поиск
          </Button>
        </form>
      </div>
      <p className='search__form-err-message'>Нужно ввести ключевое слово</p>
      <FilterCheckbox>Короткометражки</FilterCheckbox>
    </div>
  );
};

export default SearchForm;
