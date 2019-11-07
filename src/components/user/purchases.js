import React, { Component } from 'react';
import Tooltip from './tooltip';
class Purchases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver = () => this.setState({ hovering: true })
  mouseOut = () => this.setState({ hovering: false })

  render() {
    return <>
      {this.state.hovering === true
        ? <Tooltip text="Usted tiene 140 compras" />
        : null}
      <div className="alert alert-warning" role="alert" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        Compras en Mercado Libre
      </div>
    </>
  }
}

export default Purchases;