import React, { Component, Fragment } from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import MostPicked from "../component/MostPicked";

// import landingPageJson from "../json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    const landingPageData = require("../json/landingPage.json");
    console.log(landingPageData);
    return (
      <Fragment>
        <Header {...this.props}></Header>
        <Hero data={landingPageData.hero} />
        <MostPicked data={landingPageData.mostPicked} />
      </Fragment>
    );
  }
}
