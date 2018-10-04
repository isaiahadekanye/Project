import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lan: "",
      Language: []
    };
    this.halfWay = this.halfWay.bind(this);
    this.formInput = this.formInput.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.manipulate = this.manipulate.bind(this);
  }

  halfWay(event) {
    const val = event.target.value;
    this.setState({
      lan: val
    });
  }

  formInput(event) {
    let word = {
      key: Date.now(),
      text: this.state.lan,
      count: 0
    };

    const temp = [...this.state.Language];
    let obj = temp.find(x => x.text === word.text);
    let index = temp.indexOf(obj);

    if (index === -1) {
      const Language = [
        ...temp,
        {
          key: Date.now(),
          text: this.state.lan,
          count: 0
        }
      ];
      this.setState({ Language });
    } else {
      temp[index].count = temp[index].count + 1;
      this.setState({ Language: temp });
    }

    event.preventDefault();
  }

  removeItem(key) {
    this.setState({
      Language: this.state.Language.filter(
        language => (language.count < 0 ? language.key !== key : language)
      )
    });
  }

  manipulate(id, fun) {
    const temp = [...this.state.Language];
    let obj = temp.find(x => x.key === id);
    let index = temp.indexOf(obj);
    if (fun === "add") {
      temp[index].count = temp[index].count + 1;
      this.setState({ Language: temp });
    } else {
      temp[index].count = temp[index].count - 1;
      this.setState({ Language: temp });
    }
  }

  render() {
    const styles = {
      textAlign: "center",
      color: "red",
      fontSize: "50",
      backgroundColor: "blue",
      padding: "10px",
      border: "2px solid #FFF",
      width: "165px",
      listStyle: "none",
      margin: "auto",
      display: "inline-block"
    };

    return (
      <React.Fragment>
        <form className="text-center" onSubmit={this.formInput}>
          <label>
            <h2 className="text-danger">
              Add Below,
              <br /> 0 and below, On click it deletes:
            </h2>
          </label>
          <br />
          <input
            id="program"
            type="text"
            name="Language"
            value={this.state.lan}
            onChange={this.halfWay}
            required
          />
          <br />
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        {this.state.Language.map(language => (
          <div className="text-center" key={language.key}>
            <span className="badge badge-secondary mb-3">{language.count}</span>

            <li
              className="mx-2 mb-3"
              style={styles}
              value={language.text}
              onClick={() => this.removeItem(language.key)}
            >
              {language.text}
            </li>
            <button
              className="btn btn-success mx-1"
              onClick={() => this.manipulate(language.key, "add")}
            >
              Add
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => this.manipulate(language.key, "subtract")}
            >
              Subtract
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Input;
