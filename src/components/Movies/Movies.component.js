import React, { useContext } from "react";
import "./Movies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import { MoviesContext } from "../../contexts/Movies.context";

const Movies = ({ onSearch, onLike, onDislike }) => {
  const {
    state,
    filteredMovies,
    moviesKeyword,
    setMoviesKeyword,
    moviesIsShort,
    setMoviesIsShort,
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

  return (
    <div className='movies'>
      <SearchForm
        onSubmit={onSearch}
        keyword={moviesKeyword}
        setKeyword={setMoviesKeyword}
        isShort={moviesIsShort}
        setIsShort={setMoviesIsShort}
      />
      {/* <p className='movies__message'>Начните поиск</p> */}
      <MoviesCardList>
        {cardsElements}
        {/* <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        /> */}
      </MoviesCardList>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.more}
        type='button'
        onClick={() => {
          console.log(state);
        }}
      >
        Еще
      </Button>
    </div>
  );
};

export default Movies;
