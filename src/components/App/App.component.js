import React from "react";
import "./App.styles.scss";
import Hero from "../Hero/Hero.component";
import AboutProject from "../AboutProject/AboutProject.component";
import Techs from "../Techs/Techs.component";
import AboutMe from "../AboutMe/AboutMe.component";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
