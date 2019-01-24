import React, { Component } from "react";
import axios from "axios";
const apiEndpoint = "http://localhost/api/process";

class Processes extends Component {
  state = { Process_name: [] };

  handleDelete = p => {
    console.log(p);
    const Process_name = this.state.Process_name.filter(pro => pro.id !== p.id);
    this.setState({ Process_name });
  };

  handleView = p => {
    console.log("View: ", p);
  };

  handleAdd = async () => {
    console.log("Add Process");
    const obj = {
      Process_name: "Proceso agragado",
      Process_Description: "Descripcioin "
    };
    const { data: post } = await axios.post(apiEndpoint, obj);
    const Process_name = [post, ...this.state.Process_name];
    this.setState({ Process_name });
  };

  async componentDidMount() {
    const { data: Process_name } = await axios.get(apiEndpoint);
    console.log({ Process_name });
    this.setState({ Process_name });
  }
  render() {
    if (this.state.Process_name.length === 0)
      return <h2>There are no processes in database</h2>;
    return (
      <div>
        <p className="text-center">
          Showing {this.state.Process_name.length} processes in the database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Process</th>

              <th>
                <button
                  onClick={() => this.handleAdd()}
                  style={{ marginLeft: 0, marginTop: 10 }}
                  className="btn btn-success btn-sm"
                >
                  Add Process
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {//<Process processName="Proceso numero 1" />
            this.state.Process_name.map(p => (
              <tr key={p.id}>
                <td>
                  {" "}
                  <span style={{ marginRight: 10, color: "blue" }}>{p.id}</span>
                  <span style={{ fontStyle: "Italic" }}>{p.Process_name}</span>
                </td>
                <td />
                <td>
                  <button
                    onClick={() => this.handleView(p)}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() => this.handleDelete(p)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Processes;
