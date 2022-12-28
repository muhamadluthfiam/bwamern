import React, { Component } from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";

export default class PropertiesPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Footer />
      </>
    )
  }
}