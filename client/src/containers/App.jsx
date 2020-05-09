import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import decode from "jwt-decode";
import { setCurrentUser, addError, setToken } from "../store/actions";

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
    <div>App Work</div>
  </Provider>
);

export default App;
