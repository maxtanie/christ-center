import React from "react";
import "./Home.css";
import MainMovie from "../MainMovie/MainMovie";
// import Movies from "../Movies/Movies";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainMovie />
      </div>
    );
  }
}
export default Home;
