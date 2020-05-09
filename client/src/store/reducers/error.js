import { ADD_ERROR, REMOVE_ERROR } from "../types";

const initialState = {
  message: null,
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        ...state,
        message: action.error,
      };

    case REMOVE_ERROR:
      return {
        ...state,
        message: null,
      };

    default:
      return state;
  }
};

export default error;
