import React from "react";
import "./Movies.styles.scss";
import SearchForm from "../SearchForm/SearchForm.component";
import MoviesCardList from "../MoviesCardList/MoviesCardList.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import MoviesCard from "../MoviesCard/MoviesCard.component";
import imgPath from "../../images/card/card-no-img.jpg";

const Movies = () => {
  return (
    <div className='movies'>
      <SearchForm />
      {/* <p className='movies__message'>Начните поиск</p> */}
      <MoviesCardList>
        <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        />
        <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        />
        <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        />
        <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        />
        <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        />
        <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        />
        <MoviesCard
          card={{
            nameRU: "33 слова о дизайне",
            duration: "1ч 47м",
            image: imgPath,
          }}
        />
      </MoviesCardList>
      <Button buttonType={BUTTON_TYPE_CLASSES.more}>Еще</Button>
    </div>
  );
};

export default Movies;
