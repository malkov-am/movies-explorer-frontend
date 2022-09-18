export const BASE_URL = "https://api.nomoreparties.co";

// Получение фильмов
export const getMovies = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: "GET",
  }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
};
