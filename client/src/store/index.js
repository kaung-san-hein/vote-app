import { createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const DEFAULT_STATE = {
  error: {
    message: null,
  },
};

export const store = createStore(reducers, DEFAULT_STATE);
