import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.styles.scss";

const Footer = () => {
  const location = useLocation();
  const routesWithFooter = ["/", "/movies", "/saved-movies"];

  if (routesWithFooter.includes(location.pathname.toLowerCase())) {
    return (
      <footer className='footer'>
        <p className='footer__copyright'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__container'>
          <div className='footer__links'>
            <a
              href='https://practicum.yandex.ru'
              target='_blank'
              rel='noreferrer'
              className='footer__link'
            >
              Яндекс.Практикум
            </a>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
              className='footer__link'
            >
              Github
            </a>
          </div>
          <p className='footer__year'>&copy;2020</p>
        </div>
      </footer>
    );
  }
  return null;
};

export default Footer;
