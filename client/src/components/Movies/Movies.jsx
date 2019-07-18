import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Movies.css";

const Movies = props => {
  return (
    <article className="bloc-movies">
      <div className="title-movie center white">{props.title}</div>
      <div className="img-movie">
        <img src={props.poster} alt="" />
      </div>
      <div className="info-movie">
        <b>Acteurs: </b>
        <span>{props.actors.join(", ")}</span>
        <br />
        <b>Age: </b>
        <span>{props.age}</span>
        <br />
        <b>Sortie: </b>
        <span>{props.released}</span>
        <br />
        {/* <b>Durée: </b>
                      <br /> */}
        <b>Genres: </b>
        <span>{props.type.join(",")}</span>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            assumenda vel unde alias expedita eos aliquid a officia commodi
            repellat, aliquam porro dolore id optio impedit cum sequi nesciunt
            minima!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Eligendi assumenda vel unde Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eligendi assumenda vel unde alias expedita eos
            aliquid a officia commodi repellat, aliquam porro dolore id optio
            impedit cum sequi nesciunt minima!Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi assumenda vel undeamet
            consectetur adipisicing elit. Eligendi assumenda vel unde
          </span>
        </div>
      </div>
    </article>
  );
};
export default Movies;
