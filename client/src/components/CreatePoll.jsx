import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createPoll } from "../store/actions";

class CreatePoll extends Component {
  state = {
    question: "",
    options: [""],
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  addOptions = () => {
    this.setState({
      options: [...this.state.options, ""],
    });
  };

  handleOptions = (event, index) => {
    const options = [...this.state.options];
    options[index] = event.target.value;
    this.setState({
      options,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      question: this.state.question,
      options: this.state.options.filter((option) => option !== ""),
    };
    this.props.createPoll(data);
  };

  render() {
    const options = this.state.options.map((option, index) => (
      <Fragment key={index}>
        <label>Options</label>
        <input
          type="text"
          value={option}
          onChange={(event) => this.handleOptions(event, index)}
        />
      </Fragment>
    ));

    const { question } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="question">Question</label>
        <input
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={this.handleChange}
        />
        {options}
        <button type="button" onClick={this.addOptions}>
          Add Options
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(null, { createPoll })(CreatePoll);
