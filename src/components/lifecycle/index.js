import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      site: this.props.site,
      bg: 'warning',

      value: true,
      countImpresions: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.mytime(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.site !== this.props.site) {
      this.setState({
        site: this.props.site
      })
    }
    if (prevState.site !== this.state.site) {
      this.setState({
        bg: 'danger'
      })
    }
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  } */

  mytime = () =>  {
    this.setState({
      date: new Date()
    });
  }

  changeInside = () => {
    this.setState({
      site: 'nothing'
    })
  }

  getRadmonNum = () => {
    this.setState({
      value: Math.random() > 0.5,
      countImpresions: this.state.countImpresions + 1
    });
  }
  /*
  //deprecados
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {}
  componentWillUpdate(nextProps, nextState) {}
  */

  render() {
    const { site, bg } = this.state;
    return (
      <>
        <button className="btn btn-sm btn-secondary" onClick={this.changeInside}>Change Inside</button>
        <div className={`alert alert-${bg}`} role="alert">
          <h3>Welcome to MELI!</h3>
          <h1><span className="badge badge-success">{site}</span></h1>
        </div>
        <h1>It is <span className="badge badge-info">{this.state.date.toLocaleTimeString()}</span></h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">shouldComponentUpdate</h5>
            <div className="card-text">

              <strong>{this.state.value.toString()}</strong>
              <p>Count of impresions: <strong>{this.state.countImpresions}</strong></p>
              <button onClick={this.getRadmonNum}>
                Click to randomly select: true or false
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Index.propTypes = {
  site: PropTypes.string
};

Index.defaultProps = {
  site: 'MLA'
}

export default Index;