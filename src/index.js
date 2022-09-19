import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.component";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { MoviesProvider } from "./contexts/Movies.context";
import { UserProvider } from "./contexts/User.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
