import React, { useContext, useEffect } from "react";
import "./SavedMovies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import { MoviesContext } from "../../contexts/Movies.context";

const SavedMovies = ({ onSearch, onDislike }) => {
  const {
    filteredSavedMovies,
    savedMoviesKeyword,
    setSavedMoviesKeyword,
    savedMoviesIsShort,
    setSavedMoviesIsShort,
    filterSavedMovies,
  } = useContext(MoviesContext);

  useEffect(() => {
    filterSavedMovies();
    return () => {
      setSavedMoviesKeyword("");
      setSavedMoviesIsShort(false);
    };
  }, []);

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
      <MoviesCardList cardsElements={cardsElements} />
    </div>
  );
};

export default SavedMovies;
