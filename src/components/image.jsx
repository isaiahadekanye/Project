import React, { Component } from "react";
import image1 from "../image1.jpeg";
import image2 from "../image2.jpeg";

class Image extends Component {
  constructor() {
    super();
    this.state = {
      links: ""
    };
    this.changeState = this.changeState.bind(this);
  }
  componentDidMount() {
    this.setState({ links: image1 });
  }

  changeState() {
    const { links: temp } = this.state;
    let links = temp === image1 ? image2 : image1;
    this.setState({
      links
    });
  }

  render() {
    const { links } = this.state;
    return (
      <React.Fragment>
        <h2 className="text-center text-success">
          Change Image By Clicking On It
        </h2>
        <img
          alt="images"
          className="rounded mx-auto d-block"
          src={links}
          onClick={this.changeState}
        />
      </React.Fragment>
    );
  }
}

export default Image;
