import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import landingPage from "json/landingPage.json"
import MostPick from "parts/MostPick"

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
        <MostPick refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
      </>
    )
  }
}