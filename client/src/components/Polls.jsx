import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getPolls, getUserPolls, getCurrentPoll } from "../store/actions";

class Polls extends Component {
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }

  handleSelect = (id) => {
    const { history, getCurrentPoll } = this.props;
    getCurrentPoll(id);
    history.push(`/poll/${id}`);
  };

  render() {
    const { auth, getPolls, getUserPolls } = this.props;

    const polls = this.props.polls.map((poll) => (
      <li onClick={() => this.handleSelect(poll._id)} key={poll._id}>
        {poll.question}
      </li>
    ));

    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div>
            <button onClick={getPolls}>All polls</button>
            <button onClick={getUserPolls}>My polls</button>
          </div>
        )}
        <ul>{polls}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => ({
  auth: store.auth,
  polls: store.polls,
});

export default connect(mapStateToProps, {
  getPolls,
  getUserPolls,
  getCurrentPoll,
})(Polls);
