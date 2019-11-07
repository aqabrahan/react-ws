import React, {Component} from 'react';
import Cat from './cat';

class MouseWithCat extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          Podríamos simplemente cambiar el <p> por un <Cat> aquí ... pero luego
          necesitaríamos crear un componente <MouseWithSomethingElse> separado
          cada vez que necesitamos usarlo, por lo que <MouseWithCat>
          no es realmente reutilizable todavía.
        */}
        <Cat mouse={this.state} />
      </div>
    );
  }
}

export default MouseWithCat;