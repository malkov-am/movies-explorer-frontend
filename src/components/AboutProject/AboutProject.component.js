import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader.component";
import "./AboutProject.styles.scss";

const AboutProject = () => {
  return (
    <section className='about'>
      <LandingHeader>О проекте</LandingHeader>
      <div className='about__container'>
        <div>
          <h3 className='about__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className='about__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='bar'>
        <div className='bar__cell bar__cell_highlighted'>
          <p className='bar__caption bar__caption_dark'>1 неделя</p>
        </div>
        <div className='bar__cell bar__cell_filled'>
          <p className='bar__caption bar__caption_dark'>4 недели</p>
        </div>
        <div className='bar__cell'>
          <p className='bar__caption bar__caption_light'>Back-end</p>
        </div>
        <div className='bar__cell'>
          <p className='bar__caption bar__caption_light'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
