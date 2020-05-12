import React from "react";
import Poll from "../components/Poll";
import ErrorMessage from "../components/ErrorMessage";

const PollPage = () => {
  return (
    <div>
      <ErrorMessage />
      <Poll />
    </div>
  );
};

export default PollPage;
