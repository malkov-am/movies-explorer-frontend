import React from "react";
import "./Portfolio.styles.scss";
import arrowPath from "../../images/landing/about-me-arrow.svg";

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className="portfolio__links">
        <li>
          <a
            className='portfolio__link'
            href='https://howtolearn.herokuapp.com/home.html'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <img className='portfolio__arrow' src={arrowPath} alt='Ссылка' />
          </a>
        </li>
        <li>
          <a
            className='portfolio__link'
            href='https://russian-travel.herokuapp.com/home.html'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <img className='portfolio__arrow' src={arrowPath} alt='Ссылка' />
          </a>
        </li>
        <li>
          <a
            className='portfolio__link'
            href='https://malkov.mesto.nomoredomains.sbs'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <img className='portfolio__arrow' src={arrowPath} alt='Ссылка' />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
