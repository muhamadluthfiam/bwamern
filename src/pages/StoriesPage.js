import React, { Component } from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
export default class StoriesPage extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <Header {...this.props}/>
        <Footer/>
      </>
    )
  }
}