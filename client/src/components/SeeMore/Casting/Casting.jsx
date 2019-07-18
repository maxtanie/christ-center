import React from "react";
import "./Casting.css";
import img from "../../../images/film01.jpg";

const Casting = ({ casting }) => {
  let displayState = { display: "none" };
  if (casting) displayState = { display: "block" };
  return (
    <div style={displayState}>
      <div className="casting grid-col-4">
        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>
        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>
        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>
        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>

        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>
        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>
        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>
        <div className="bloc-casting-img">
          <img
            src="http://fr.web.img5.acsta.net/pictures/19/01/25/00/53/1534787.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Casting;
