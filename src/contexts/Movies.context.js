import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer";

export const MOVIES_ACTION_TYPES = {
  SET_MOVIES: "SET_MOVIES",
  SET_KEYWORD: "SET_KEYWORD",
  SET_IS_SHORT: "SET_IS_SHORT",
  SET_FILTERED_MOVIES: "SET_FILTERED_MOVIES",
};

const INITIAL_STATE = {
  movies: [],
  filteredMovies: [],
  keyword: "",
  isShort: false,
};

const moviesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_MOVIES":
      console.log('SET_MOVIES FIRED');
      return {
        ...state,
        movies: payload,
      };
    case "SET_KEYWORD":
      console.log('SET_KEYWORD FIRED');
      return {
        ...state,
        keyword: payload,
      };
      case "SET_IS_SHORT":
        console.log('SET_IS_SHORT FIRED', payload);
        return {
          ...state,
          isShort: payload,
        };
     case "SET_FILTERED_MOVIES":
      console.log('SET_FILTERED_MOVIES FIRED');
       return {
        ...state,
        filteredMovies: payload,
      };

    default:
      throw new Error(`Неподдерживаемое действие ${type} в moviesReducer`);
  }
};

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [state, dispath] = useReducer(moviesReducer, INITIAL_STATE);
  const { movies, filteredMovies, keyword, isShort } = state;

  const filteredMoviesList = (() => {
    return movies.filter((movie) => {
      if (isShort) {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) && movie.duration <= 40;
      } else {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
      }
    });
  })();

  useEffect(() => {
    setFilteredMovies(filteredMoviesList);
  }, [movies, isShort])

  const setMovies = (movies) => {
    dispath(createAction(MOVIES_ACTION_TYPES.SET_MOVIES, movies));
  };
  const setKeyword = (keyword) => {
    dispath(createAction(MOVIES_ACTION_TYPES.SET_KEYWORD, keyword));
  };
  const setIsShort = (boolean) => {
    dispath(createAction(MOVIES_ACTION_TYPES.SET_IS_SHORT, boolean));
  }
  const setFilteredMovies = (filteredMovies) => {
    dispath(createAction(MOVIES_ACTION_TYPES.SET_FILTERED_MOVIES, filteredMovies));
  };

  const value = { setMovies, setKeyword, setIsShort, setFilteredMovies, movies, filteredMoviesList, filteredMovies, keyword, isShort, state };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
