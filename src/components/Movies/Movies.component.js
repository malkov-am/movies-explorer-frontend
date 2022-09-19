import React, { useContext } from "react";
import "./Movies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import { MoviesContext } from "../../contexts/Movies.context";

const Movies = ({ onSearch }) => {
  const { movies, filteredMovies } = useContext(MoviesContext);

  const cardsElements = filteredMovies.map((card) => (
    <MoviesCard card={card} key={card.id} />
  ));

  return (
    <div className='movies'>
      <SearchForm onSubmit={onSearch} />
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
      <Button buttonType={BUTTON_TYPE_CLASSES.more} type='button' onClick={() => {
        console.log(movies);
        console.log(filteredMovies);
      }}>
        Еще
      </Button>
    </div>
  );
};

export default Movies;
