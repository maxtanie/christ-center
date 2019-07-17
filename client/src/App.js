import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiIndex: [],
      apiMovies: []
    };
    this.api = axios.create({ baseURL: "http://localhost:8000" });
  }
  callAPI() {
    this.api
      .get()
      .then(res => {
        console.log(res);
        this.setState({ apiIndex: res.data });
      })
      .catch(err => err);
  }

  callAPIMovies() {
    this.api
      .get("/movies")
      .then(res => {
        console.log(res);
        this.setState({ apiMovies: res.data });
      })
      .catch(err => err);
  }
  componentDidMount() {
    this.callAPI();
    this.callAPIMovies();
  }

  render() {
    console.log("movies", this.state.apiIndex);
    const move = this.state.apiIndex.map((movie, i) => {
      return (
        <div>
          <p key={i}>
            Title:{movie.title}
            <br />
          </p>
          <img src={movie.image} />
        </div>
      );
    });
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
        <p>{move}</p>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
        </Switch>
      </div>
    );
  }
}

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
};

export default App;
