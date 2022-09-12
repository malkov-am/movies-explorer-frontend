import React from 'react';
import './SearchForm.styles.scss';
import Switch from '../Switch/Switch.component';
import Button, {
    BUTTON_COLOR_CLASSES,
    BUTTON_TYPE_CLASSES,
  } from "../Button/Button.component";

const SearchForm = () => {
    return (
        <div className='search'>
          <div className='search__container'>
            <form className='search__form'>
                <input className='search__form-input' type='text' placeholder='Фильм' />
                <Button buttonType={BUTTON_TYPE_CLASSES.sizeM} color={BUTTON_COLOR_CLASSES.white}>Поиск</Button>
            </form>
          </div>
          <Switch>Короткометражки</Switch>
        </div>
    );
};

export default SearchForm;
