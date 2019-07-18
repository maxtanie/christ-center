import React from "react";
import "./Home.css";
import MainMovie from "../MainMovie/MainMovie";
import Movies from "../Movies/Movies";

const Home = () => {
  return (
    <React.Fragment>
      <MainMovie />
      <Movies />
    </React.Fragment>
  );
};

export default Home;
