import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Movies.css";
import imgMovie from "../../images/film01.jpg";
import axios from "axios";

class Movies extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      apiIndex: []
    };
    this.api = axios.create({ baseURL: "http://localhost:8000" });
  }

  callAPI = () => {
    this.api
      .get()
      .then(res => {
        console.log(res);
        this.setState({ apiIndex: res.data });
      })
      .catch(err => err);
  };

  componentDidMount = () => {
    this.callAPI();
  };

  render() {
    return (
      <section className="container-movies home grid-col-3">
        {this.state.apiIndex.map((movie, id) => {
          // console.log(movie.age.length);
          return (
            <article className="bloc-movies" key={id}>
              <div className="title-movie center white">{movie.title}</div>
              <div className="img-movie">
                <img src={movie.poster} alt="" />
              </div>
              <div className="info-movie">
                <b>Acteurs: </b>
                <span>{movie.actors}</span>
                <br />
                <b>Age: </b>
                <span>{movie.age}</span>
                <br />
                <b>Durée: </b>
                <br />
                <b>Genres: </b>
                <span>{movie.type}</span>
              </div>
              <div className="flex content-to-watch">
                <div className="see-more-link">
                  <NavLink className="see-more-link" to="movies/see-more">
                    Voir plus...
                  </NavLink>
                </div>
                <div className="btn-watch">
                  <button className="watch-btn">Regarder</button>
                </div>
              </div>
              <div className="layer-synopsis">
                <div className="content-synopsis" id="content-synopsis">
                  <span className="bold">Synopsis: </span>
                  <span className="txt-synopsis">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi assumenda vel unde alias expedita eos aliquid a
                    officia commodi repellat, aliquam porro dolore id optio
                    impedit cum sequi nesciunt minima!Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Eligendi assumenda vel
                    unde Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Eligendi assumenda vel unde alias expedita eos aliquid
                    a officia commodi repellat, aliquam porro dolore id optio
                    impedit cum sequi nesciunt minima!Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Eligendi assumenda vel
                    undeamet consectetur adipisicing elit. Eligendi assumenda
                    vel unde
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}

export default Movies;
