import React, { useContext, useEffect, useState } from "react";
import "./Movies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import { MoviesContext } from "../../contexts/Movies.context";
import Preloader from "../Preloader/Preloader.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import { useMediaQuery } from "react-responsive";

const Movies = ({ onSearch, onLike, onDislike, isLoading }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const [itemsCount, setItemsCount] = useState(5);

  const {
    filteredMovies,
    moviesKeyword,
    setMoviesKeyword,
    moviesIsShort,
    setMoviesIsShort,
    moviesIsSearched,
  } = useContext(MoviesContext);

  useEffect(() => {
    const initialQuantity = (() => {
      if (isMobile) {
        return 5;
      }
      if (isTablet) {
        return 8;
      }
      if (isDesktop) {
        return 12;
      }
    })();
    setItemsCount(initialQuantity);
  }, [filteredMovies, isMobile, isTablet, isDesktop]);

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
    const expandQuantity = (() => {
      if (isMobile) {
        return 2;
      }
      if (isTablet) {
        return 2;
      }
      if (isDesktop) {
        return 3;
      }
    })();
    setItemsCount(itemsCount + expandQuantity);
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
