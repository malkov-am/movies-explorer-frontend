import React from "react";
import "./SearchForm.styles.scss";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.component";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";

const SearchForm = ({ onSubmit, keyword, setKeyword, isShort, setIsShort }) => {
  const handleChangeSearch = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    onSubmit();
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
            value={keyword}
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
      <FilterCheckbox isShort={isShort} setIsShort={setIsShort}>
        Короткометражки
      </FilterCheckbox>
    </div>
  );
};

export default SearchForm;
