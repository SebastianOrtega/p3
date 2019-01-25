import React, { Component } from "react";
import Process from "./process";

class View extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Detalle</h1>
        <h2>Process: {props.Process_name}</h2>
        <h2>Description: {props.Process_Description}</h2>
      </div>
    );
  }
}

export default View;
