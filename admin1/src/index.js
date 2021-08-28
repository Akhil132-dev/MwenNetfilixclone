import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/Aurhcontext/Authcontext";
import {
  MoviesContext,
  MoviesContextProvider,
} from "./context/Moviecontext/MoviesContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
