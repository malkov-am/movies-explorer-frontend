import React from "react";
import './SavedMovies.styles.scss';
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const SavedMovies = () => {
  return <div className="movies">
    <SearchForm />
    <MoviesCardList />
    <Button buttonType={BUTTON_TYPE_CLASSES.more}>Еще</Button>
  </div>;
};

export default SavedMovies;
