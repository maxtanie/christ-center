import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Films from "./components/Films/Films";
import Series from "./components/Series/Series";
import SeeMore from "./components/SeeMore/SeeMore";
import Enseignements from "./components/Enseignements/Enseignements";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Films} />
            <Route path="/movies/see-more" exact component={SeeMore} />
            <Route path="/series" exact component={Series} />
            <Route path="/added-recently" exact component={Series} />
            <Route path="/teachings/adults" exact component={Enseignements} />
            <Route path="/teachings/teenager" exact component={Enseignements} />
            <Route path="/teachings/kids" exact component={Enseignements} />
          </Switch>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
