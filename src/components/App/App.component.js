import React, { useContext, useEffect, useState } from "react";
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
import InfoPopup from "../InfoPopup/InfoPopup.component";

const App = () => {
  // Переменные состояния сообщения об ошибке
  const [infoPopupMessage, setInfoPopupMessage] = useState("");
  const [infoPopupType, setInfoPopupType] = useState("");
  const [isInfoPopupShown, setIsInfoPopupShown] = useState(false);

  // Переменные состояния прелоадера
  const [isLoading, setIsLoading] = useState(false);

  // Подписка на контекст
  const {
    movies,
    setMovies,
    setMoviesIsSearched,
    filterMovies,
    filterSavedMovies,
    setSavedMovies,
    addMovieToSaved,
    removeMovieFromSaved,
    resetState,
    restoreState,
  } = useContext(MoviesContext);
  const { isLoggedIn, setIsLoggedIn, setCurrentUser } = useContext(UserContext);

  // Хуки
  const navigate = useNavigate();

  // Чтение локального хранилища
  const token = localStorage.getItem("token");
  const moviesState = localStorage.getItem("moviesState");

  // Действия при загрузке приложения: проверяем токен
  useEffect(() => {
    token ? handleTokenCheck(token) : setIsLoggedIn(false);
  }, []);

  // Обработка ошибок
  function handleError(err) {
    err.message
      ? showInfoPopup("error", err.message)
      : err
          .json()
          .then((message) =>
            showInfoPopup(
              "error",
              message?.validation?.body?.message || message.message
            )
          );
    if (err.status === 401) handleLogout();
  }

  // Действия при логине: загружаем сохраненные фильмы
  useEffect(() => {
    if (token) {
      getSavedMovies(token)
        .then((savedMovies) => setSavedMovies(savedMovies))
        .catch((err) => handleError(err));
    }
    if (moviesState) {
      restoreState(moviesState);
    }
  }, [isLoggedIn]);

  // Обработчик проверки токена
  function handleTokenCheck(token) {
    checkToken(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        handleError(err);
      });
  }

  // Отобразить попап
  function showInfoPopup(type, message) {
    setInfoPopupType(type);
    setInfoPopupMessage(message);
    setIsInfoPopupShown(true);
    setTimeout(() => setIsInfoPopupShown(false), 4000);
  }

  // Обработчик поиска фильмов
  function handleSearchMovies() {
    if (movies.length === 0) {
      setMoviesIsSearched(true);
      setIsLoading(true);
      getMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => handleError(err))
        .finally(() => setIsLoading(false));
    } else {
      filterMovies();
    }
  }

  // Обработчик поиска сохраненных фильмов
  function handleSearchSavedMovies() {
    filterSavedMovies();
  }

  // Обработчик логина
  function handleLogin(userData) {
    authorize(userData)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          handleTokenCheck(data.token);
          navigate("/movies");
        }
      })
      .catch((err) => handleError(err));
  }

  // Обработчик регистрации
  function handleRegister(userData) {
    const { email, password } = userData;
    register(userData)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => handleError(err));
  }

  // Обработчик выхода из профиля
  function handleLogout() {
    localStorage.clear();
    resetState();
    setIsLoggedIn(false);
    navigate("/");
  }

  // Обработчик обновления профиля
  function handleUpdateProfile(userData) {
    updateProfile(userData, token)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        showInfoPopup("success", "Профиль обновлен");
      })
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

  // Не рендерим страницу, пока не получили пользователя
  if (isLoggedIn === undefined) return null;

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
                  isLoading={isLoading}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/saved-movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies
                  onSearch={handleSearchSavedMovies}
                  onDislike={handleDislike}
                />
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
            element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
          />
          <Route
            exact
            path='/signup'
            element={
              <Register onRegister={handleRegister} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <InfoPopup
        message={infoPopupMessage}
        isActive={isInfoPopupShown}
        type={infoPopupType}
      />
    </div>
  );
};

export default App;
