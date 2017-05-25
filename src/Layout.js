import React, { Component } from 'react';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  clicker = this.clicker.bind(this);
  buttonText = this.buttonText.bind(this);

  clicker() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  buttonText() {
    if (this.state.clicked) {
      return "Clicked!";
    } else {
      return "Unclicked!";
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clicker}>{this.buttonText()}</button>
      </div>
    );
  }
}

export default Layout;
