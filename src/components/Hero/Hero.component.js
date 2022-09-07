import React from 'react';
import './hero.styles.scss';
import heroLogoPath from '../../images/landing/hero-logo.svg';

const Hero = () => {
    return (
        <div className='hero'>
          <h1 className='hero__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <img className='hero__logo' src={heroLogoPath} alt='Декоративный рисунок в виде кругов' />
        </div>
    );
};

export default Hero;
