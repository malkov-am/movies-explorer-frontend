import React from "react";
import "./App.styles.scss";
import Hero from "../Hero/Hero.component";
import AboutProject from "../AboutProject/AboutProject.component";
import Techs from "../Techs/Techs.component";

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <AboutProject />
      <Techs />
    </div>
  );
};

export default App;
