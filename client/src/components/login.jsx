import React, { Component } from "react";

class Login extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log("login enviado");
  };
  render() {
    return (
      <div className="jumbotron m-4">
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
