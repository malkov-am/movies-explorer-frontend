import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader.component";
import "./AboutMe.styles.scss";
import photoPath from "../../images/landing/about-me-photo.jpg";

const AboutMe = () => {
  return (
    <section className='about-me'>
      <LandingHeader>Студент</LandingHeader>
      <div className='about-me__container'>
        <img className='about-me__photo' src={photoPath} alt='Моя фотография' />
        <div className='about-me__description'>
          <h3 className='about-me__name'>Андрей</h3>
          <h4 className='about-me__about'>Фронтенд-разработчик, 30 лет</h4>
          <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='about-me__description-link'
            href='https://github.com/malkov-am'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
