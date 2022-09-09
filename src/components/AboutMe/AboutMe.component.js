import React from 'react';
import LandingHeader from '../LandingHeader/LandingHeader.component';
import './AboutMe.styles.scss';
import photoPath from '../../images/landing/about-me-photo.jpg';
import arrowPath from '../../images/landing/about-me-arrow.svg';

const AboutMe = () => {
    return (
        <section className='about-me'>
          <LandingHeader>Студент</LandingHeader>
          <div className='about-me__container'>
          <img className='about-me__photo' src={photoPath} alt='Моя фотография' />
              <div className='about-me__description'>
                  <h3 className='about-me__name'>Виталий</h3>
                  <h4 className='about-me__about'>Фронтенд-разработчик, 30 лет</h4>
                  <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                  <a className='about-me__description-link' href='https://github.com/malkov-am' target="_blank" rel='noreferrer'>Github</a>
              </div>
          </div>
            <h4 className='about-me__portfolio'>Портфолио</h4>
            <a className='about-me__link' href='https://howtolearn.herokuapp.com/home.html' target="_blank" rel='noreferrer'>
                Статичный сайт
                <img className='about-me__arrow' src={arrowPath} alt='Ссылка' />
            </a>
            <a className='about-me__link' href='https://russian-travel.herokuapp.com/home.html' target="_blank" rel='noreferrer'>
                Адаптивный сайт
                <img className='about-me__arrow' src={arrowPath} alt='Ссылка' />
            </a>
            <a className='about-me__link' href='https://malkov.mesto.nomoredomains.sbs' target="_blank" rel='noreferrer'>
                 Одностраничное приложение
                <img className='about-me__arrow' src={arrowPath} alt='Ссылка' />
            </a>
        </section>
    );
};

export default AboutMe;
