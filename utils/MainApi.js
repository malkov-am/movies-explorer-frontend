export const BASE_URL = "https://api.moviesexplorer.nomorepartiesxyz.ru";

// Обработка ответа с сервера
function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
}

// Регистрация нового пользователя
export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => handleResponse(res));
};

// Авторизация пользователя
export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => handleResponse(res));
};

// Проверка токена
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

// Обновление профиля
export const updateProfile = ({ email, name }, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name }),
  }).then((res) => handleResponse(res));
};

// Получение сохраненных фильмов
export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};

// Сохранение фильма
export const saveMovie = (movie, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => handleResponse(res));
};

// Удаление фильма
export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};
