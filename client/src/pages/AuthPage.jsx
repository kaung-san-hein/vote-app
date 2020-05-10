import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import Auth from "../components/Auth";

const AuthPage = ({ isAuthenticated, authType }) => {
  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <ErrorMessage />
      <Auth authType={authType} />
    </div>
  );
};

const mapStateToProps = (store) => ({
  isAuthenticated: store.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AuthPage);
