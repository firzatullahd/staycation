import React, { Component, Fragment } from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import MostPicked from "../component/MostPicked";
import Categories from "../component/Categories";
import Testimony from "../component/Testimony";
import Footer from "../component/Footer";

import landingPageData from "../json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    // const landingPageData = require("../json/landingPage.json");
    // console.log(landingPageData);
    return (
      <Fragment>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPageData.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPageData.mostPicked}
        />
        <Categories data={landingPageData.categories} />
        <Testimony data={landingPageData.testimonial} />
        <Footer />
      </Fragment>
    );
  }
}
