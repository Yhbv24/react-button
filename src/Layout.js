import React, { Component } from 'react';
import ButtonPress from './ButtonPress.js';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
    this.clicker = this.clicker.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }

  clicker() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  buttonText() {
    return this.state.clicked ? "Clicked" : "Unclicked!";
  }

  render() {
    return (
      <div>
        <ButtonPress onclick={this.clicker} text={this.buttonText()} />
      </div>
    );
  }
}

export default Layout;
