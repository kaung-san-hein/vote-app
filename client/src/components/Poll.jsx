import React from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";
import { vote } from "../store/actions";

const color = () => {
  return "#" + Math.random().toString(16).slice(2, 8);
};

const Poll = ({ poll, vote }) => {
  const answers =
    poll.options &&
    poll.options.map((option) => (
      <button
        onClick={() => vote(poll._id, { answer: option.option })}
        key={option._id}
      >
        {option.option}
      </button>
    ));

  //   const data = {
  //     labels: poll.options.map((option) => option.option),
  //     datasets: [
  //       {
  //         label: poll.question,
  //         backgroundColor: poll.options.map(() => color()),
  //         borderColor: "#323643",
  //         data: poll.options.map((option) => option.votes),
  //       },
  //     ],
  //   };

  return (
    <div>
      <h3>{poll.question}</h3>
      <div>{answers}</div>
      {/* <Pie data={data} /> */}
    </div>
  );
};

const mapStateToProps = (store) => ({
  poll: store.poll,
});

export default connect(mapStateToProps, { vote })(Poll);
