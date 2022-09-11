import React from "react";
import "./App.styles.scss";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import Main from "../Main/Main.component";
import Movies from "../Movies/Movies.component";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
