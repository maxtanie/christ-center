import React from "react";
import "./Resume.css";

const Resume = ({ resume }) => {
  // let displayState = { display: "none" };
  // if (resume) {
  //   displayState = { display: "block" };
  // } else {
  //   resume = false;
  // }
  return (
    <div>
      <p className="justify txt-resume">{resume}</p>
    </div>
  );
};

export default Resume;
