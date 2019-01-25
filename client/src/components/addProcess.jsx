import React, { Component } from "react";
import axios from "axios";
const apiEndpoint = "http://localhost/api/process/";

class AddProcess extends Component {
  state = {
    process: {
      Process_name: "",
      Process_Description: "",
      NumSerie: ""
    }
  };
  handleSubmit = async e => {
    e.preventDefault();
    console.log("Add Process in database");
    const { data: post } = await axios.post(apiEndpoint, this.state.process);
    window.location.href = "/processes";
  };

  handleChange = e => {
    const process = { ...this.state.process };
    process[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ process });
  };

  handleCancel = e => {
    e.preventDefault();
    window.location.href = "/processes";
  };

  render() {
    return (
      <div className="jumbotron m-4">
        <h1>Add Process</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Process_name">Process Name</label>
            <input
              value={this.state.process.Process_name}
              onChange={this.handleChange}
              autoFocus
              id="Process_name"
              name="Process_name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Process_Description">Process Description</label>
            <input
              name="Process_Description"
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="NumSerie">Serial Number</label>
            <input
              name="NumSerie"
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Add</button>
          <button
            onClick={this.handleCancel}
            style={{ float: "right" }}
            className="btn btn-danger"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default AddProcess;
