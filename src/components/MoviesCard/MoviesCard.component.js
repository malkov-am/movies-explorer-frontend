import React from "react";
import "./MoviesCard.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const MoviesCard = ({ card }) => {
  const { nameRU, duration, image } = card;
  return (
    <article className='card'>
      <div className='card__container'>
        <div className='card__title-container'>
          <h3 className='card__title'>{nameRU}</h3>
          <p className='card__duration'>{duration}</p>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.like} />
      </div>
      <img className='card__img' src={image} alt={nameRU} />
    </article>
  );
};

export default MoviesCard;
