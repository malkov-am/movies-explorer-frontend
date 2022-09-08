import React from "react";
import "./Techs.styles.scss";
import LandingHeader from "../LandingHeader/LandingHeader.component";

const Techs = () => {
  return (
    <section className='techs'>
      <LandingHeader>Технологии</LandingHeader>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='techs__cards'>
        <div className='techs__card'>
          <p className='techs__card-title'>HTML</p>
        </div>
        <div className='techs__card'>
          <p className='techs__card-title'>CSS</p>
        </div>
        <div className='techs__card'>
          <p className='techs__card-title'>JS</p>
        </div>
        <div className='techs__card'>
          <p className='techs__card-title'>React</p>
        </div>
        <div className='techs__card'>
          <p className='techs__card-title'>Git</p>
        </div>
        <div className='techs__card'>
          <p className='techs__card-title'>Express.js</p>
        </div>
        <div className='techs__card'>
          <p className='techs__card-title'>mongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;
