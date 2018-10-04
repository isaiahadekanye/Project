import React, { Component } from "react";
import image1 from "../image1.jpeg";
import image2 from "../image2.jpeg";

class Image extends Component {
  constructor() {
    super();
    this.state = {
      links: "links1"
    };
    this.changeState = this.changeState.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="text-center text-success">
          Change Image By Clicking On It
        </h2>
        <img
          alt="images"
          className="rounded mx-auto d-block"
          src={this.formatter()}
          onClick={this.changeState}
        />
      </React.Fragment>
    );
  }

  changeState() {
    if (this.state.links === "links1") {
      this.setState({
        links: "links2"
      });
    } else {
      this.setState({
        links: "links1"
      });
    }
  }

  formatter() {
    const linkImage1 = image1;
    const linkImage2 = image2;

    if (this.state.links === "links1") {
      return linkImage1;
    } else {
      return linkImage2;
    }
  }
}

export default Image;
