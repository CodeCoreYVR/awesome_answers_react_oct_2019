import React, { Component } from "react";

export default class SignInPage extends Component {
  // constructor(props) {}
  render() {
    return (
      <main>
        <form className="ui form">
          <div className="field">
            <lable htmlFor="email">Email</lable>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div className="field">
            <lable htmlFor="password">Password</lable>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="ui primary button" type="submit">
            Sign In
          </button>
        </form>
      </main>
    );
  }
}
