import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import TestPage from "../pages/TestPage";
import HomePage from "../pages/HomePage";
import PollPage from "../pages/PollPage";

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
        <Route exact path="/poll/:id" component={PollPage} />
        <Route exact path="/test" component={TestPage} />
      </Switch>
    </main>
  );
};

export default RouteViews;
