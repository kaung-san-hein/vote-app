import { SET_CURRENT_USER } from "../types";
import { addError, removeError } from "./error";
import api from "../../services/api";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

export const setToken = (token) => api.setToken(token);

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwtToken");
    api.setToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};

export const authUser = (path, data) => {
  return async (dispatch) => {
    try {
      const { token, ...user } = await api.call("post", `auth/${path}`, data);
      console.log(token);
      console.log(user);
      localStorage.setItem("jwtToken", token);
      api.setToken(token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
      dispatch(addError(message));
    }
  };
};
