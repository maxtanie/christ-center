import React, { Component } from "react";
import Movies from "../Movies/Movies";

const MoviesLists = props => {
  let movies = props.filterMovies.map((movie, i) => {
    return (
      <Movies
        key={i}
        title={movie.title}
        age={movie.age}
        type={movie.type}
        released={movie.released}
        actors={movie.actors}
        poster={movie.poster}
      />
    );
  });
  return (
    <section className="container-movies home grid-col-3">{movies}</section>
  );
};

export default MoviesLists;
