import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Processes from "./components/processes";
import Login from "./components/login";
import AddProcess from "./components/addProcess";
import "./App.css";
class App extends Component {
  render() {
    return (
      <main className="content">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/addProcess" component={AddProcess} />
          <Route path="/" component={Processes} />
        </Switch>
      </main>
    );
  }
}

export default App;
