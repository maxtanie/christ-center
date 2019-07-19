import React, { Component } from "react";
// import MainMovie from "../MainMovie/MainMovie";
// import { NavLink } from "react-router-dom";
import "./SeeMore.css";
import axios from "axios";
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
      movie: {},
      resume: true,
      infos: false,
      // titresSim: false,
      casting: false
    };
    this.api = axios.create({ baseURL: "http://localhost:8000" });
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
  callSeeMoreMovieId = id => {
    this.api
      .get("/movies/see-more/" + id)
      .then(res => {
        console.log("db res -------------", res);
        this.setState({ movie: res.data });
      })
      .catch(err => err);
  };
  componentDidMount() {
    this.callSeeMoreMovieId(this.props.match.params.id);
  }
  ShowContent = () => {
    this.setState({
      resume: !this.state.resume
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="poster-movie">
          <img src={this.state.movie.image} alt="" />
        </div>
        <section className="see-more">
          <div className="container-movies">
            <div className="bloc-content-infos">
              <div className="bloc-info-title">
                <span className="title-info red bold size-small">
                  {this.state.movie.titleFr}
                </span>
                <span className="year-info red size-small">
                  ({this.state.movie.released})
                </span>
                <div className="original-title red size-small">
                  Hacksaw Ridge
                </div>
              </div>
              <div className="bloc-movie">
                <iframe
                  title="iframe"
                  width="100%"
                  height="500"
                  src={this.state.movie.trailer}
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
                <Resume resume={this.state.movie.sysnopsisEn} />
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
