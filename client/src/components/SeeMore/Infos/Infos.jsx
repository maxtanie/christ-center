import React from "react";
import "./Infos.css";
import img from "../../../images/film01.jpg";

const Infos = ({ infos }) => {
  let displayState = { display: "none" };
  if (infos) {
    displayState = { display: "block" };
  } else {
    infos = false;
  }
  return (
    <div style={displayState}>
      <div className="flex-between">
        <div className="bloc-img-poster">
          <img src={img} alt="" />
        </div>
        <div className="bloc-info-movie">
          <div className="info">
            <b className="bold red">Note</b>
            <div className="info-txt">8.5</div>
          </div>
          <div className="info">
            <b className="bold red">Age</b>
            <div className="info-txt">16+</div>
          </div>
          <div className="info">
            <b className="bold red">Genres</b>
            <div className="info-txt">Drame, Guerre</div>
          </div>
          <div className="info">
            <b className="bold red">Réalisateur</b>
            <div className="info-txt">Mel Gibson</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
