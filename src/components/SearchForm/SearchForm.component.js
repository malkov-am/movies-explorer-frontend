import React, { useState } from "react";
import "./SearchForm.styles.scss";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.component";
import Button, {
  BUTTON_COLOR_CLASSES,
  BUTTON_TYPE_CLASSES,
} from "../Button/Button.component";
import { SEARCH_KEYWORD_MIN_LENGTH } from "../../utils/constants";

const SearchForm = ({ onSubmit, keyword, setKeyword, isShort, setIsShort }) => {
  const [errMessage, setErrMessage] = useState("");

  const isValid = (() => {
    if (keyword.length > 0) {
      return true;
    } else {
      return false;
    }
  })();

  const handleChangeSearch = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setErrMessage("");
      onSubmit();
    } else {
      setErrMessage("Нужно ввести ключевое слово");
    }
  };

  return (
    <div className='search'>
      <div className='search__container'>
        <form
          className='search__form'
          minLength={SEARCH_KEYWORD_MIN_LENGTH}
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
      <p className='search__form-err-message'>{errMessage}</p>
      <FilterCheckbox isShort={isShort} setIsShort={setIsShort}>
        Короткометражки
      </FilterCheckbox>
    </div>
  );
};

export default SearchForm;
