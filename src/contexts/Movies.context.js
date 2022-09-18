import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer";

export const MOVIES_ACTION_TYPES = {
  SET_MOVIES: "SET_MOVIES",
};

const INITIAL_STATE = {
  movies: [],
};

const moviesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: payload,
      };

    default:
      throw new Error(`Неподдерживаемое действие ${type} в moviesReducer`);
  }
};

export const MoviesContext = createContext({
  movies: null,
  setMovies: () => null,
});

export const MoviesProvider = ({ children }) => {
  const [state, dispath] = useReducer(moviesReducer, INITIAL_STATE);
  const { movies } = state;

  const setMovies = (movies) => {
    dispath(createAction(MOVIES_ACTION_TYPES.SET_MOVIES, movies));
  };

  const value = { setMovies, movies, state };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
