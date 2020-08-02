import React, { Component, Fragment } from "react";
import Header from "../component/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Header {...this.props}></Header>
      </Fragment>
    );
  }
}
