import React, { Component } from "react";

class Process extends Component {
  //state = {
  //  processName: "Proceso numero 1"
  //};

  handleView = () => {
    console.log("Click View");
  };
  handleEdit = () => {
    console.log("Click Edit");
  };
  handleDelete = () => {
    console.log("Click Delete");
  };

  render() {
    return (
      <div>
        <span>
          <span className="processClass alert alert-primary m-2">
            {this.props.processName}
          </span>
          <button
            onClick={this.handleView}
            className="btn btn-primary btn-sm m-1"
          >
            View
          </button>
          <button
            onClick={this.handleEdit}
            className="btn btn-secondary btn-sm m-1"
          >
            Edit
          </button>
          <button
            onClick={this.handleDelete}
            className="btn btn-danger btn-sm m-1"
          >
            Delete
          </button>
        </span>
      </div>
    );
  }
}

export default Process;
