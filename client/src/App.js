import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Films from "./components/Films/Films";
import Series from "./components/Series/Series";
import SeeMore from "./components/SeeMore/SeeMore";
import Enseignements from "./components/Enseignements/Enseignements";
import MoviesLists from "./components/MoviesLists/MoviesLists";
import FilterSearch from "./components/FilterSearch/FilterSearch";

class App extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      apiMovies: [],
      searchMovies: "",
      showLayer: ""
    };
    this.api = axios.create({ baseURL: "http://localhost:8000" });
  }

  callAPI = () => {
    this.api
      .get()
      .then(res => {
        console.log(res);
        this.setState({ apiMovies: res.data });
      })
      .catch(err => err);
  };

  HandleInput = e => {
    e.preventDefault();
    const layer = document.querySelector(".layer");
    const search = document.querySelector("#search");
    const app = document.querySelector(".App");

    if (search.value !== "") {
      this.setState({
        searchMovies: e.target.value,
        showLayer: app.classList.add("hide"),
        showLayer: layer.classList.remove("hide"),
        showLayer: search.classList.add("show")
      });
    } else {
      this.setState({
        searchMovies: e.target.value,
        showLayer: app.classList.remove("hide"),
        showLayer: layer.classList.add("hide"),
        showLayer: search.classList.remove("show")
      });
    }
  };

  componentDidMount = () => {
    this.callAPI();
  };

  render() {
    let filterMovies = this.state.apiMovies.filter(movies => {
      return (
        movies.title
          .toLocaleLowerCase()
          .includes(this.state.searchMovies.toLocaleLowerCase()) ||
        movies.released
          .toLocaleLowerCase()
          .includes(this.state.searchMovies.toLocaleLowerCase()) ||
        movies.title
          .toLocaleLowerCase()
          .includes(this.state.searchMovies.toLocaleLowerCase())
      );
    });

    return (
      <React.Fragment>
        <Nav handleInput={this.HandleInput} />
        <div className="layer hide">
          <div className="bloc-movie-filtered">
            <MoviesLists filterMovies={filterMovies} />
          </div>
        </div>

        <div className="App">
          <Switch>
            <Route path="/" exact component={Home}>
              <MoviesLists filterMovies={filterMovies} />
            </Route>
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
