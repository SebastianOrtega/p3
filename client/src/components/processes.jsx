import React, { Component } from "react";
//import Process from "./process";
import axios from "axios";
//import { getMovies } from "../services/fakeMovieService";

class Processes extends Component {
  state = { Process_name: [] };

  /*handleDelete = p => {
    console.log(p);
    const movies = this.state.movies.filter(m => m._id !== p._id);
    this.setState({ movies });
  };*/

  handleDelete = p => {
    console.log(p);
    const Process_name = this.state.Process_name.filter(
      pro => pro.Process_name !== p.Process_name
    );
    this.setState({ Process_name });
  };

  handleView = p => {
    console.log("View: ", p);
  };

  handleAdd = () => {
    console.log("Add Process");
  };

  async componentDidMount() {
    const { data: Process_name } = await axios.get(
      "http://localhost/api/process"
    );
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
              <tr key={p.Process_name}>
                <td> {p.Process_name}</td>
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
