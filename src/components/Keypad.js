import React, { Component } from 'react';

class Keypad extends Component {

handleKeyPress = () => {
  console.log('Entering password...');
}

  render() {
    return (
      <input
      onKeyUp={this.handleKeyPress}
      type="password"/>
    );
  }

}

export default Keypad;
