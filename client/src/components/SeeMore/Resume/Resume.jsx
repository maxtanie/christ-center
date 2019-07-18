import React from "react";
import "./Resume.css";

const Resume = ({ resume }) => {
  let displayState = { display: "none" };
  if (resume) {
    displayState = { display: "block" };
  } else {
    resume = false;
  }
  return (
    <div style={displayState}>
      <p className="justify txt-resume">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        voluptatibus, quibusdam sapiente illo recusandae provident facilis,
        similique placeat aspernatur qui fugiat fugit. Minus fuga corporis
        eaque, aspernatur iste porro rem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ducimus, voluptatibus, quibusdam sapiente illo
        recusandae provident facilis, similique placeat aspernatur qui fugiat
        fugit. Minus fuga corporis eaque, aspernatur iste porro rem.
      </p>
    </div>
  );
};

export default Resume;
