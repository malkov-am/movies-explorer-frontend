import React, { useContext } from "react";
import "./App.styles.scss";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import Main from "../Main/Main.component";
import Movies from "../Movies/Movies.component";
import SavedMovies from "../SavedMovies/SavedMovies.component";
import Profile from "../Profile/Profile.component";
import Login from "../Login/Login.component";
import Register from "../Register/Register.component";
import NotFound from "../NotFound/NotFound.component";
import { getMovies } from "../../utils/MoviesApi";
import { MoviesContext } from "../../contexts/Movies.context";

const App = () => {
  const { state, setMovies } = useContext(MoviesContext);

  async function searchMovies(keyword) {
    try {
      const movies = await getMovies();
      const filteredMovies = movies.filter((movie) =>
        movie.nameRU.includes(keyword)
      );
      setMovies(filteredMovies);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route
            exact
            path='/movies'
            element={<Movies searchMovies={searchMovies} />}
          />
          <Route exact path='/saved-movies' element={<SavedMovies />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/signin' element={<Login />} />
          <Route exact path='/signup' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
