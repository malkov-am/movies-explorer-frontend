import React, { useContext, useEffect } from "react";
import "./App.styles.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import Main from "../Main/Main.component";
import Movies from "../Movies/Movies.component";
import SavedMovies from "../SavedMovies/SavedMovies.component";
import Profile from "../Profile/Profile.component";
import Login from "../Login/Login.component";
import Register from "../Register/Register.component";
import NotFound from "../NotFound/NotFound.component";
import { BASE_URL, getMovies } from "../../utils/MoviesApi";
import { MoviesContext } from "../../contexts/Movies.context";
import {
  authorize,
  register,
  checkToken,
  updateProfile,
  getSavedMovies,
  saveMovie,
  deleteMovie,
} from "../../utils/MainApi";
import { UserContext } from "../../contexts/User.context";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  // Подписка на контекст
  const {
    movies,
    setMovies,
    filteredMoviesList,
    setFilteredMovies,
    setSavedMovies,
    addMovieToSaved,
    removeMovieFromSaved,
  } = useContext(MoviesContext);
  const { isLoggedIn, setIsLoggedIn, setCurrentUser } = useContext(UserContext);

  // Хуки
  const navigate = useNavigate();

  // Чтение токена
  const token = localStorage.getItem("token");

  // Действия при загрузке приложения: проверяем токен
  useEffect(() => {
    if (token) {
      handleTokenCheck(token);
    }
  }, []);

  // Обработчик проверки токена
  function handleTokenCheck(token) {
    checkToken(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => handleError(err));
  }

  // Обработка ошибок
  function handleError(err) {
    console.error(err);
  }

  // Запросы к серверам для получения списка всех фильмов и сохраненных фильмов
  function getMoviesData() {
    return Promise.all([getMovies(), getSavedMovies(token)]);
  }

  // Обработчик поиска фильмов
  function handleSearchMovies() {
    if (movies.length === 0) {
      getMoviesData()
        .then(([movies, savedMovies]) => {
          setMovies(movies);
          setSavedMovies(savedMovies);
        })
        .catch((err) => handleError(err));
    } else {
      setFilteredMovies(filteredMoviesList);
    }
  }

  // Обработчик логина
  function handleLogin(userData) {
    authorize(userData)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          handleTokenCheck(data.token);
        }
      })
      .catch((err) => handleError(err));
  }

  // Обработчик регистрации
  function handleRegister(userData) {
    register(userData)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => handleError(err));
  }

  // Обработчик выхода из профиля
  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  // Обработчик обновления профиля
  function handleUpdateProfile(userData) {
    updateProfile(userData, token)
      .then((updatedUserData) => setCurrentUser(updatedUserData))
      .catch((err) => handleError(err));
  }

  // Обработчик сохранения фильма
  function handleLike(card) {
    saveMovie(
      {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: BASE_URL + card.image.url,
        trailerLink: card.trailerLink,
        thumbnail: BASE_URL + card.image.formats.thumbnail.url,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      },
      token
    )
      .then((movie) => addMovieToSaved(movie))
      .catch((err) => handleError(err));
  }

  // Обработчик удаления фильма из сохраненных
  function handleDislike(savedMovie) {
    deleteMovie(savedMovie._id, token)
      .then(() => removeMovieFromSaved(savedMovie))
      .catch((err) => handleError(err));
  }

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route
            exact
            path='/movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  onSearch={handleSearchMovies}
                  onLike={handleLike}
                  onDislike={handleDislike}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/saved-movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/profile'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  onLogout={handleLogout}
                  onUpdateProfile={handleUpdateProfile}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/signin'
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            exact
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
