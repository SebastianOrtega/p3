import React, { Component } from "react";

export class StatsCard extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            Real Time {this.props.text}
          </h5>
          <p
            className="mx-auto"
            style={{ fontSize: "3rem", textAlign: "center" }}
          >
            {this.props.value}
          </p>
        </div>
      </div>
    );
  }
}

export default StatsCard;
