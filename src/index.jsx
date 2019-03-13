import React, { Component } from "react";
import { Layout } from "./layout.jsx";
class Html extends Component {
  state = {
    title: "React",
    jsList: [
      { src: "test.js" },
      // { src: "list.js" }
    ]
  };
  constructor( props ) {
    super( props );
  }
  render() {
    let { state, props } = this;
    return (
      <Layout { ...props } { ...state }>
        <div id="page">hello world~</div>
      </Layout>
    );
  }
}
export default Html;
