import React from "react";
import "./MoviesCardList.styles.scss";

const MoviesCardList = ({ cardsElements }) => {
  return <div className='movies-card-list'>{cardsElements}</div>;
};

export default MoviesCardList;
