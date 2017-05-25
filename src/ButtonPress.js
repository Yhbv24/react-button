import React, { Component } from 'react';

class ButtonPress extends Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonPress;
