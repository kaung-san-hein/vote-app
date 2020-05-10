import React from "react";
import { connect } from "react-redux";

const ErrorMessage = ({ error }) => <div>{error && error.message}</div>;

const mapStateToProps = (store) => ({
  error: store.error,
});

export default connect(mapStateToProps)(ErrorMessage);
