import React from "react";
import "./App.styles.scss";
import Hero from "../Hero/Hero.component";
import AboutProject from "../AboutProject/AboutProject.component";

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <AboutProject />
    </div>
  );
};

export default App;
