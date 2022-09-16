import React from "react";
import "./MoviesCardList.styles.scss";

const MoviesCardList = ({ children }) => {
  return <div className='movies-card-list'>{children}</div>;
};

export default MoviesCardList;
