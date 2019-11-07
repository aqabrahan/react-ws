import React, {Component} from 'react';
import logo from '../../logo.svg';
class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={logo} style={{ width: 200, position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

export default Cat;