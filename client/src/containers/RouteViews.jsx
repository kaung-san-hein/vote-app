import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import PollPage from "../pages/PollPage";
import CreatePollPage from "../pages/CreatePollPage";

const RouteViews = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/login"
          render={() => <AuthPage authType="login" />}
        />
        <Route
          exact
          path="/register"
          render={() => <AuthPage authType="register" />}
        />
        <Route exact path="/poll/new" component={CreatePollPage} />
        <Route exact path="/poll/:id" component={PollPage} />
      </Switch>
    </main>
  );
};

export default RouteViews;
