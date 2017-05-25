import React, { Component } from 'react';

class ButtonPress extends Component {
  render() {
    return (
      <button onClick={this.props.clicked}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonPress;
