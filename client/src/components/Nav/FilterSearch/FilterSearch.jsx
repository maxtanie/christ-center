import React, { Component } from "react";
import "./FilterSearch.css";
import Movies from "../../Movies/Movies";

class FilterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  HandleChange = e => {
    const layerMovie = document.querySelector(".layer-movie");
    const App = document.querySelector(".App");
    const search = document.querySelector("#search");
    if (search.value != "") {
      layerMovie.classList.remove("hide");
      App.classList.add("hide");
    } else {
      layerMovie.classList.add("hide");
      App.classList.remove("hide");
    }
    e.preventDefault();
  };

  HandleInput = e => {
    console.log(e.target.value);
    this.setState({
      userInput: e.target.value
    });

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="layer-movie hide">
          <Movies />
        </div>
        <React.Fragment>
          <input
            id="search"
            onChange={this.HandleChange}
            type="text"
            name="filterSeacrh"
            className="filter-search"
            placeholder="Title, Characters, Type"
          />
        </React.Fragment>
      </div>
    );
  }
}
export default FilterSearch;
