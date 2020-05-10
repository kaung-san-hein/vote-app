import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

const RouteViews = () => {
  return (
    <main>
      <Switch>
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
      </Switch>
    </main>
  );
};

export default withRouter(RouteViews);
