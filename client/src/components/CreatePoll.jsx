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
    this.setState({
      question: "",
      options: [""],
    });
  };

  render() {
    const options = this.state.options.map((option, index) => (
      <Fragment key={index}>
        <label className="form-label">Options</label>
        <input
          className="form-input"
          type="text"
          value={option}
          onChange={(event) => this.handleOptions(event, index)}
        />
      </Fragment>
    ));

    const { question } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-label" htmlFor="question">
          Question
        </label>
        <input
          className="form-input"
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={this.handleChange}
        />
        {options}
        <div className="button-center">
          <button className="button" type="button" onClick={this.addOptions}>
            Add Options
          </button>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, { createPoll })(CreatePoll);
