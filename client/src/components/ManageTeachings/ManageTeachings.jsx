import React, { Component } from "react";
import "./ManageTeachings.css";

class ManageTeachings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container big-container-teachings">
          <h3 className="manage-teachings-title">Manage Teachings Adults</h3>
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
                  Teachings Videos
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
            <tbody>
              <tr className="table-row">
                <td className="table-division">
                  <div>1</div>
                </td>

                <td className="table-division">
                  <div>2</div>
                </td>

                <td className="table-division">
                  <div>3</div>
                </td>

                <td className="table-division">
                  <div>4</div>
                </td>
                <td className="table-division">Edit</td>
                <td className="table-division">Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ManageTeachings;
