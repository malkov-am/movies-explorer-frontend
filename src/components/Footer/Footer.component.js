import React from "react";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <div className='footer'>
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
    </div>
  );
};

export default Footer;
