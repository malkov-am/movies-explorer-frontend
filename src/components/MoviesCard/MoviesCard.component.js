import React from "react";
import "./MoviesCard.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import { BASE_URL } from "../../utils/MoviesApi";

const MoviesCard = ({ card, isLiked }) => {
  const { nameRU, duration, image, trailerLink } = card;

  const convertedDuration = (() => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}ч ${minutes}м`
  })();

  let cardButton;
  if (isLiked) {
    cardButton = (
      <Button
        buttonType={BUTTON_TYPE_CLASSES.dislike}
        type='button'
        onClick={(evt) =>
          evt.currentTarget.classList.toggle("button_type_like_active")
        }
      />
    );
  } else {
    cardButton = (
      <Button
        buttonType={BUTTON_TYPE_CLASSES.like}
        type='button'
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
          <p className='card__duration'>{convertedDuration}</p>
        </div>
        {cardButton}
      </div>
      <a href={trailerLink} target='_blank' rel='noreferrer'>
        <img className='card__img' src={BASE_URL + image.url} alt={nameRU} />
      </a>
    </article>
  );
};

export default MoviesCard;
