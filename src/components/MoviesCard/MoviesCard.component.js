import React, { useContext } from "react";
import "./MoviesCard.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import { BASE_URL } from "../../utils/MoviesApi";
import { MoviesContext } from "../../contexts/Movies.context";

const MoviesCard = ({ card, onLike, onDislike, buttonType }) => {
  const { id, nameRU, duration, image, trailerLink } = card;

  const { savedMovies } = useContext(MoviesContext);

  // Преобразование времени в формат ХХч ХХм
  const convertedDuration = (() => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}ч ${minutes}м`;
  })();

  // Проверка, сохранена ли карточка
  const savedMovie = savedMovies.find(
    (savedMovie) => savedMovie.movieId === id
  );
  const isLiked = (() => (savedMovie ? true : false))();

  // Обработчик кнопки сохранения / удаления фильма
  const handleLikeClick = () =>
    isLiked ? onDislike(savedMovie) : onLike(card);

  // Обработчик кнопки удаления фильма
  const handleDislikeClick = () => onDislike(card);

  let cardButton;
  if (buttonType === "dislike") {
    cardButton = (
      <Button
        buttonType={BUTTON_TYPE_CLASSES.dislike}
        type='button'
        onClick={handleDislikeClick}
      />
    );
  } else if (buttonType === "like") {
    cardButton = (
      <Button
        buttonType={BUTTON_TYPE_CLASSES.like}
        type='button'
        onClick={handleLikeClick}
        isActive={isLiked}
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
        <img
          className='card__img'
          src={image.url ? BASE_URL + image.url : image}
          alt={nameRU}
        />
      </a>
    </article>
  );
};

export default MoviesCard;
