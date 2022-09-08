import React from "react";
import "./Hero.styles.scss";

const Hero = () => {
  return (
    <section className='hero'>
      <h1 className='hero__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className='hero__logo-container'></div>
    </section>
  );
};

export default Hero;
