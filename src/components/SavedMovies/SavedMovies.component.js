import React, { useContext, useEffect } from "react";
import "./SavedMovies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import { MoviesContext } from "../../contexts/Movies.context";

const SavedMovies = ({ onSearch, onDislike }) => {
  const {
    state,
    savedMovies,
    filterSavedMovies,
    filteredSavedMovies,
    savedMoviesKeyword,
    setSavedMoviesKeyword,
    savedMoviesIsShort,
    setSavedMoviesIsShort,
  } = useContext(MoviesContext);

  const cardsElements = filteredSavedMovies.map((card) => (
    <MoviesCard
      card={card}
      key={card.movieId}
      onDislike={onDislike}
      buttonType='dislike'
    />
  ));

  return (
    <div className='movies'>
      <SearchForm
        onSubmit={onSearch}
        keyword={savedMoviesKeyword}
        setKeyword={setSavedMoviesKeyword}
        isShort={savedMoviesIsShort}
        setIsShort={setSavedMoviesIsShort}
      />
      <MoviesCardList>{cardsElements}</MoviesCardList>
      <Button buttonType={BUTTON_TYPE_CLASSES.more} type='button' onClick={() => {
          console.log(state);
        }}>
        Еще
      </Button>
    </div>
  );
};

export default SavedMovies;
