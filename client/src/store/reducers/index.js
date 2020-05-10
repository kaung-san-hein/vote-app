import { combineReducers } from "redux";
import error from "./error";
import auth from "./auth";
import { polls, poll } from "./polls";

const reducers = combineReducers({
  error,
  auth,
  poll,
  polls,
});

export default reducers;
