import React from "react";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = (props) => {
  return (
    <div>
      <ErrorMessage />
      <Polls {...props} />
    </div>
  );
};
export default HomePage;
