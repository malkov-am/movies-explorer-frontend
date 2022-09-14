import React from "react";
import "./MoviesCard.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const MoviesCard = ({ card, isLiked }) => {
  const { nameRU, duration, image } = card;
  let cardButton;

  if (isLiked) {
    cardButton = (
      <Button
        buttonType={BUTTON_TYPE_CLASSES.dislike}
        onClick={(evt) =>
          evt.currentTarget.classList.toggle("button_type_like_active")
        }
      />
    );
  } else {
    cardButton = (
      <Button
        buttonType={BUTTON_TYPE_CLASSES.like}
        onClick={(evt) =>
          evt.currentTarget.classList.toggle("button_type_like_active")
        }
      />
    );
  }

  return (
    <article className='card'>
      <div className='card__container'>
        <div className='card__title-container'>
          <h3 className='card__title'>{nameRU}</h3>
          <p className='card__duration'>{duration}</p>
        </div>
        {cardButton}
      </div>
      <img className='card__img' src={image} alt={nameRU} />
    </article>
  );
};

export default MoviesCard;
