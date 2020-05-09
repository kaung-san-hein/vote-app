import { combineReducers } from "redux";
import error from "./error";
import auth from "./auth";

const reducers = combineReducers({
  error,
  auth,
});

export default reducers;
