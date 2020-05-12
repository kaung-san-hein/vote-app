import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import CreatePoll from "../components/CreatePoll";

const CreatePollPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <div>
      <ErrorMessage />
      <CreatePoll />
    </div>
  );
};

const mapStateToProps = (store) => ({
  isAuthenticated: store.auth.isAuthenticated,
});

export default connect(mapStateToProps)(CreatePollPage);
