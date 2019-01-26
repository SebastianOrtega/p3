import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Graph extends Component {
  state = { data: ["nada"] };

  componentWillReceiveProps(nextprops) {
    const newData = [];
    for (let i = 1; i < nextprops.data.length; i++) {
      newData[i] = [
        parseInt(i),
        parseInt(nextprops.data[i].LectureP1),
        parseInt(nextprops.data[i].LectureP2)
      ];
    }
    newData[0] = ["x", "Temperature", "Humidity"];
    console.log(newData);
    this.setState({ data: newData });
    const testArray = [
      ["x", "Temperature", "Humidity"],
      [0, 0, 0],
      [1, 10, 20],
      [2, 23, 30],
      [3, 17, 30],
      [4, 18, 10],
      [5, 9, 2],
      [6, 11, 9],
      [7, 27, 10],
      [8, 33, 15],
      [9, 40, 20],
      [10, 32, 21],
      [11, 35, 32]
    ];

    const testArray2 = [
      [0, 0, 0],
      [1, 10, 20],
      [2, 23, 30],
      [3, 17, 30],
      [4, 18, 10],
      [5, 9, 2],
      [6, 11, 9],
      [7, 27, 10],
      [8, 33, 15],
      [9, 40, 20],
      [10, 32, 21],
      [11, 35, 32]
    ];
  }

  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        {console.log(this.state.data)}
        <Chart
          chartType="LineChart"
          data={[this.state.data]}
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
    );
  }
}

export default Graph;
