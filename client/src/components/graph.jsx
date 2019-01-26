import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Graph extends Component {
  state = { data: [], dataLoadingStatus: "false" };

  componentWillReceiveProps(nextprops) {
    const newData = [0, 0, 0];
    console.log(nextprops.data);
    for (let i = 1; i < nextprops.data.length; i++) {
      newData[i] = [
        nextprops.data[i].createdAt,
        nextprops.data[i].LectureP1,
        nextprops.data[i].LectureP2
      ];
    }
    newData[0] = ["x", "Temperature", "Humidity"];
    this.setState({ data: newData, dataLoadingStatus: "ready" });
  }

  render() {
    return this.state.dataLoadingStatus === "ready" ? (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="LineChart"
          data={this.state.data}
          options={{
            curveType: "function",
            hAxis: {
              title: "Date"
            },
            vAxis: {
              title: "Temperature"
            }
          }}
          rootProps={{ "data-testid": "1" }}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
    ) : (
      <h1>------------Loading Data...</h1>
    );
  }
}

export default Graph;
