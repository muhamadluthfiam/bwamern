import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPick from "parts/MostPick"
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json"
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        {/* <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
        <MostPick refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
        <Categories data={landingPage.categories}/>
        <Testimony data={landingPage.testimonial}/> */}
        <Footer />
      </>
    )
  }
}