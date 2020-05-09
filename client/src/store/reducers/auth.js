import { SET_CURRENT_USER } from "../types";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
};

export default auth;
