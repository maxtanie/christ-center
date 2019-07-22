import React, { Component } from "react";
import "./ManageTeachings.css";
import axios from "axios";

class ManageTeachings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      // text: "",
      // image: "",
      apiManageTeachingsAdults: [],
      apiAddTeachingsAdultsById: {},
      deteletTeaching: {},
      showApi: ""
    };
    this.api = axios.create({ baseURL: "http://localhost:8000" });
  }

  getAPITeachings = () => {
    this.api
      .get("/teachings/adults", this.state)
      .then(res => {
        console.log("DATA", res);
        this.setState({
          apiManageTeachingsAdults: res.data
          // apiManageTeachingsAdults: this.state.title,
          // apiManageTeachingsAdults: this.state.text
        });
      })
      .catch(err => err);
  };

  getAPManageTeachingsAdults = () => {
    this.api
      .get("/manage-teachings-adults")
      .then(res => {
        console.log("MANAGE TEACHINGS ADULTS", res);
        this.setState({
          apiManageTeachingsAdults: res.data
        });
      })
      .catch(err => err);
  };

  handleDelete = teachId => {
    this.api
      .delete("/teachings/" + teachId)
      .then(res => {
        const filteredTeachings = this.state.apiManageTeachingsAdults.filter(
          teaching => teaching._id !== teachId
        );
        this.setState({ apiManageTeachingsAdults: filteredTeachings });
      })
      .catch(err => console.log(err));
  };

  DeleteTeachings = () => {
    this.api
      .get("/delete-teachings-adults")
      .then(res => {
        console.log("DELETE TEACHINGS ADULTS", res);
        this.setState({
          deteletTeaching: res.data
        });
      })
      .catch(err => err);
  };

  callAddteachingsAdults = id => {
    this.api
      .post("/add-teachings-adults/" + id)
      .then(res => {
        console.log("ADD TEACHINGS ADULTS POST ID", res);
        this.setState({ apiAddTeachingsAdultsById: res.data });
      })
      .catch(err => {
        console.log("SORYYYYYY", err);
      });
  };

  // handleEdit = e => {
  //   e.preventDefault();
  //   this.setState({
  //     showApi: this.state.apiManageTeachingsAdults.title
  //   });
  // };

  componentDidMount = () => {
    this.getAPITeachings();
    this.getAPManageTeachingsAdults();
    this.callAddteachingsAdults(this.props.match.params.id);
    this.DeleteTeachings(this.props.match.params.id);
  };

  render() {
    console.log("APIIIIIII", this.state.apiAddTeachingsAdultsById);
    // console.log(this.props.match.params);
    // const byId = this.state.apiManageTeachingsAdults.map(getId => {
    //   return <div>{getId._id}</div>;
    // });

    // const title = this.state.map(elem => {
    //   elem.title;
    // });

    // const elem = this.state.apiManageTeachingsAdults;
    // console.log(elem.title);

    return (
      <div>
        <div className="container big-container-teachings">
          <h3 className="manage-teachings-title oswald">
            Manage Teachings Adults
          </h3>
          <table class="product-manage-table">
            <thead>
              <tr class="table-row">
                <th colspan="1" class="table-head">
                  Teachings Image
                </th>
                <th colspan="1" class="table-head">
                  Teachings Title
                </th>
                <th colspan="1" class="table-head">
                  Teachings Text
                </th>
                <th colspan="1" class="table-head">
                  {" "}
                  Edit
                </th>
                <th colspan="1" class="table-head">
                  Delete
                </th>
              </tr>
            </thead>
            {this.state.apiManageTeachingsAdults.map(elem => {
              return (
                <React.Fragment>
                  <tbody>
                    <tr className="table-row">
                      <td className="table-division">
                        <div>
                          <img
                            className="table-image"
                            src={elem.image}
                            alt=""
                          />
                        </div>
                      </td>

                      <td className="table-division">
                        <b>{elem.title}</b>
                      </td>

                      <td className="table-division justify ">
                        <div className="text-height">{elem.text}</div>
                      </td>

                      <td className="table-division">
                        <i
                          // onClick={this.handleEdit}
                          href={`/add-teachings-adults/` + elem._id}
                          class="fa fa-edit table-icon"
                        />
                      </td>
                      <td className="table-division">
                        {/* <a
                          href={`/delete-teachings-adults/` + elem._id}
                          class="fa fa-trash table-icon"
                          aria-hidden="true"
                        /> */}

                        <i
                          onClick={() => this.handleDelete(elem._id)}
                          className="fa fa-trash table-icon"
                        />
                      </td>
                    </tr>
                  </tbody>
                </React.Fragment>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
export default ManageTeachings;
