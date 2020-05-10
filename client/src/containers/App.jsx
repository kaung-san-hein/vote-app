import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import decode from "jwt-decode";
import { setCurrentUser, addError, setToken } from "../store/actions";
import RouteViews from "./RouteViews";
import NavBar from "./NavBar";

const token = localStorage.getItem("jwtToken");

if (token) {
  setToken(token);
  try {
    store.dispatch(setCurrentUser(decode(token)));
  } catch (error) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(error));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <RouteViews />
    </Router>
  </Provider>
);

export default App;
