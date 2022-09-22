import React, { useContext, useEffect, useState } from "react";
import "./Movies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import { MoviesContext } from "../../contexts/Movies.context";
import Preloader from "../Preloader/Preloader.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const Movies = ({ onSearch, onLike, onDislike, isLoading }) => {
  // Переменные состояния
  const [itemsCount, setItemsCount] = useState(3);

  const {
    filteredMovies,
    moviesKeyword,
    setMoviesKeyword,
    moviesIsShort,
    setMoviesIsShort,
    moviesIsSearched,
  } = useContext(MoviesContext);

  useEffect(() => {
    setItemsCount(3);
  }, [filteredMovies]);

  const cardsElements = filteredMovies.map((card) => (
    <MoviesCard
      card={card}
      key={card.id}
      onLike={onLike}
      onDislike={onDislike}
      buttonType='like'
    />
  ));

  const shownCardElements = cardsElements.slice(0, itemsCount);

  const handleExpand = () => {
    setItemsCount(itemsCount + 3);
  };

  const isExpandActive = (() => {
    return shownCardElements.length === cardsElements.length ? false : true;
  })();

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
      <MoviesCardList cardsElements={shownCardElements} />
      {isExpandActive && (
        <Button
          buttonType={BUTTON_TYPE_CLASSES.more}
          type='button'
          onClick={handleExpand}
        >
          Еще
        </Button>
      )}
    </div>
  );
};

export default Movies;
