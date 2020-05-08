import React, { Component } from "react";
import api from "../services/api";

// const App = () => <div>App Work</div>;

class App extends Component {
  async componentDidMount() {
    const result = await api.call("post", "auth/login", {
      username: "username",
      password: "password",
    });
    console.log(result);
  }

  render() {
    return <div>App Work</div>;
  }
}

export default App;
