import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser, logout } from "../store/actions";

class Auth extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { authType } = this.props;
    this.props.authUser(authType || "login", { username, password });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            value={username}
            id="username"
            name="username"
            onChange={this.handleChange}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { authUser, logout })(Auth);
