import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_IS_LOGGED_IN: "SET_IS_LOGGED_IN",
};

const INITIAL_STATE = {
  currentUser: "",
  isLoggedIn: false,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "SET_IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: payload,
      };

    default:
      throw new Error(`Неподдерживаемое действие ${type} в moviesReducer`);
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispath] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser, isLoggedIn } = state;

  const setIsLoggedIn = (boolean) => {
    dispath(createAction(USER_ACTION_TYPES.SET_IS_LOGGED_IN, boolean));
  };
  const setCurrentUser = (userData) => {
    dispath(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, userData));
  };

  const value = { state, currentUser, isLoggedIn, setIsLoggedIn, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
