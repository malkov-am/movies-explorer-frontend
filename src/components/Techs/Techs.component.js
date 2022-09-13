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
      <ul className='techs__cards'>
        <li className='techs__card'>
          <p className='techs__card-title'>HTML</p>
        </li>
        <li className='techs__card'>
          <p className='techs__card-title'>CSS</p>
        </li>
        <li className='techs__card'>
          <p className='techs__card-title'>JS</p>
        </li>
        <li className='techs__card'>
          <p className='techs__card-title'>React</p>
        </li>
        <li className='techs__card'>
          <p className='techs__card-title'>Git</p>
        </li>
        <li className='techs__card'>
          <p className='techs__card-title'>Express.js</p>
        </li>
        <li className='techs__card'>
          <p className='techs__card-title'>mongoDB</p>
        </li>
      </ul>
    </section>
  );
};

export default Techs;
