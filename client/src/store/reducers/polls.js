import { SET_POLLS, SET_CURRENT_POLL } from "../types";

const polls = (state = [], action) => {
  switch (action.type) {
    case SET_POLLS:
      return action.polls;
    default:
      return state;
  }
};

const poll = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_POLL:
      return action.poll;
    default:
      return state;
  }
};

export { polls, poll };
