import React, { Component } from "react";
import { Link } from "react-router-dom";
import StatsCard from "./statsCard";
import Graph from "./graph";
import axios from "axios";
const apiEndpoint = "http://localhost/device/numserie/";

class View extends Component {
  state = { data: [] };

  async componentDidMount() {
    const result = await axios.get(apiEndpoint + this.props.NumSerie);
    //console.log(result.data);
    this.setState({ data: result.data });
  }

  formatDate(d) {
    //console.log(d);
    const dateObject = new Date(d);
    //console.log(dateObject);
    return (
      dateObject.toLocaleDateString("es-MX") +
      " " +
      dateObject.toLocaleTimeString()
    );
  }

  lastData() {
    //const gg = this.state.data;
    //console.log("GG", gg);
    return "25";
  }

  render() {
    return (
      <div>
        <h1>Detail</h1>
        <h2>Process Name: {this.props.ProcessName}</h2>
        <h2>Sensor Number: {this.props.NumSerie}</h2>
        <span>
          <StatsCard value={this.lastData()} text={"Temperature"} />
        </span>
        <span>
          <StatsCard value={"70"} text={"Humidity"} />
        </span>
        <Graph data={this.state.data} />

        <h2>Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature (ºC)</th>
              <th>Humidity (Relative%)</th>

              <th>
                <Link
                  to="/login"
                  style={{ marginLeft: 0, marginTop: 10 }}
                  className="btn btn-success btn-sm"
                >
                  Return to List
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {//<Process processName="Proceso numero 1" />
            this.state.data.map(p => (
              <tr key={p.id}>
                <td>
                  <span style={{ fontStyle: "Italic" }}>
                    {this.formatDate(p.createdAt)}
                  </span>
                </td>
                <td>
                  <span style={{ fontStyle: "Italic" }}>{p.LectureP1}</span>
                </td>
                <td>
                  <span style={{ fontStyle: "Italic" }}>{p.LectureP2}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default View;
