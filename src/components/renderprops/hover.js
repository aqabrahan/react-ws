import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hover extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
      river: 'asasas'
    }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver = () => this.setState({ hovering: true })
  mouseOut = () => this.setState({ hovering: false })

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.dibujar(this.state.hovering)}
      </div>
    )
  }
}

Hover.propTypes = {
};

export default Hover;