import React, { Component } from 'react';
import Tooltip from './tooltip';
class Mercadoenvios extends Component {
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
        ? <Tooltip text="Usted tiene 3 paquetes pendientes a enviar" />
        : null}
      <div className="alert alert-success" role="alert" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        Paquetes por despachar
      </div>
    </>
  }
}

export default Mercadoenvios;