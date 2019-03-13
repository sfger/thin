import React, { Component } from "react";
import { Layout } from "./layout.jsx";
class Html extends Component {
  state = {
    title: "404",
  };
  constructor( props ) {
    super( props );
  }
  render() {
    let { state, props } = this;
    return (
      <Layout { ...props } { ...state }>
        <div id="page">404</div>
      </Layout>
    );
  }
}
export default Html;
