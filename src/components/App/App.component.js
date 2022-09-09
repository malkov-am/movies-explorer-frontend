import React from "react";
import "./App.styles.scss";
import Hero from "../Hero/Hero.component";
import AboutProject from "../AboutProject/AboutProject.component";
import Techs from "../Techs/Techs.component";
import AboutMe from "../AboutMe/AboutMe.component";

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
};

export default App;
