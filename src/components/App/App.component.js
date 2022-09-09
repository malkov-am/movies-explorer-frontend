import React from "react";
import "./App.styles.scss";
import Hero from "../Hero/Hero.component";
import AboutProject from "../AboutProject/AboutProject.component";
import Techs from "../Techs/Techs.component";
import AboutMe from "../AboutMe/AboutMe.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const App = () => {
  return (
    <div className='App'>
      <Button buttonType={BUTTON_TYPE_CLASSES.sizeS}>Войти</Button>
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
};

export default App;
