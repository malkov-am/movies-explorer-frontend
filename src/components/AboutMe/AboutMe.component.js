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
            Привет! Меня зовут Андрей, мне 30 лет. Мое увлечение фронтендом
            началось еще в далеком 2007 году, когда я сверстал свой первый
            шаблон для CMS e107 для своего сайта в локальной сети 😊. Поступил в
            ВУЗ и начал свою карьеру я в другой области – в энергетике, но не
            нашел в ней того, чем всегда мечтал заниматься – разрабатывать
            что-то новое, и решил сменить профессию.
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
