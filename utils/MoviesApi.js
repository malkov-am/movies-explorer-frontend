export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

// Обработка ответа с сервера
function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
}

// Получение фильмов фильмов
export const getMovies = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};
