import { SET_POLLS, SET_CURRENT_POLL } from "../types";

const polls = (state = [], action) => {
  switch (action.type) {
    case SET_POLLS:
      return {
        ...state,
        polls: action.polls,
      };
    default:
      return state;
  }
};

const poll = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_POLL:
      return {
        ...state,
        poll: action.poll,
      };
    default:
      return state;
  }
};

export { polls, poll };
