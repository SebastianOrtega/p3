import React, { Component } from "react";

import "./App.css";
import Processes from "./components/processes";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Processes />
      </main>
    );
  }
}

export default App;
