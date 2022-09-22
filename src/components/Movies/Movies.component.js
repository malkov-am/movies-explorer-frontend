import React, { useContext } from "react";
import "./Movies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import { MoviesContext } from "../../contexts/Movies.context";
import Preloader from "../Preloader/Preloader.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const Movies = ({ onSearch, onLike, onDislike, isLoading }) => {
  const {
    filteredMovies,
    moviesKeyword,
    setMoviesKeyword,
    moviesIsShort,
    setMoviesIsShort,
    moviesIsSearched,
  } = useContext(MoviesContext);

  const cardsElements = filteredMovies.map((card) => (
    <MoviesCard
      card={card}
      key={card.id}
      onLike={onLike}
      onDislike={onDislike}
      buttonType='like'
    />
  ));

  const cardsMessage = (() => {
    if (!moviesIsSearched) {
      return <p className='movies__message'>Начните поиск</p>;
    } else if (!isLoading && cardsElements.length === 0) {
      return <p className='movies__message'>Ничего не найдено</p>;
    }
  })();

  return (
    <div className='movies'>
      <SearchForm
        onSubmit={onSearch}
        keyword={moviesKeyword}
        setKeyword={setMoviesKeyword}
        isShort={moviesIsShort}
        setIsShort={setMoviesIsShort}
      />
      {isLoading && <Preloader />}
      {cardsMessage}
      <MoviesCardList cardsElements={cardsElements} />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.more}
        type='button'
        // onClick={}
      >
        Еще
      </Button>
    </div>
  );
};

export default Movies;
