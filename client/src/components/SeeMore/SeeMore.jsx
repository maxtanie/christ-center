import React, { Component } from "react";
// import MainMovie from "../MainMovie/MainMovie";
// import { NavLink } from "react-router-dom";
import "./SeeMore.css";

// COMPONENT
import Resume from "./Resume/Resume";
import Infos from "./Infos/Infos";
// import TitreSimilaire from "./TitreSimilaire/TitreSimilaire";
import Casting from "./Casting/Casting";

class SeeMore extends Component {
  constructor(props) {
    super(props);
    this.sysnopsis = React.createRef();
    this.infos = React.createRef();
    this.casting = React.createRef();
    this.state = {
      resume: true,
      infos: false,
      // titresSim: false,
      casting: false
    };
    // this.ShowContentResume = this.ShowContentResume.bind(this);
    // this.ShowContentInfos = this.ShowContentInfos.bind(this);
    // // this.ShowContentTitreSim = this.ShowContentTitreSim.bind(this);
    // this.ShowContentCasting = this.ShowContentCasting.bind(this);
  }

  // ShowContentResume = () => {
  //   this.setState({

  //     resume: !this.state.resume
  //   });
  // };

  // ShowContentInfos = () => {
  //   this.setState({

  //     infos: !this.state.infos
  //   });
  // };

  // // ShowContentTitreSim = () => {
  // //   this.setState({
  // //     titresSim: "#titreSimilaire",
  // //     titresSim: !this.state.titresSim
  // //   });
  // // };

  // ShowContentCasting = () => {
  //   this.setState({

  //     casting: !this.state.casting
  //   });
  // };

  ShowContent = () => {
    this.setState({
      resume: !this.state.resume
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="poster-movie">
          <img
            src="https://images3.alphacoders.com/803/thumb-1920-803166.jpg"
            alt=""
          />
        </div>
        <section className="see-more">
          <div className="container-movies">
            <div className="bloc-content-infos">
              <div className="bloc-info-title">
                <span className="title-info red bold size-small">
                  Tu ne tueras point
                </span>
                <span className="year-info red size-small">(2016)</span>
                <div className="original-title red size-small">
                  Hacksaw Ridge
                </div>
              </div>
              <div className="bloc-movie">
                <iframe
                  title="iframe"
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/1BvirR5w9aQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>

              <nav className="nav-infos">
                <ul className="center">
                  <li
                    ref={this.ShowContentSynopsis}
                    onClick={this.ShowContentResume}
                    className="list-infos black"
                  >
                    Synopsis
                  </li>
                  <li
                    ref={this.ShowContentInfos}
                    onClick={this.ShowContentResume}
                    className="list-infos black"
                  >
                    Infos
                  </li>
                  <li
                    ref={this.ShowContentCasting}
                    onClick={this.ShowContentResume}
                    className="list-infos black"
                  >
                    Casting
                  </li>
                </ul>
              </nav>
              <div className="show-info">
                <Resume resume={this.state.resume} />
                <Infos infos={this.state.infos} />
                {/* <TitreSimilaire titreSimilaire={this.state.titresSim} /> */}
                <Casting casting={this.state.casting} />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default SeeMore;
