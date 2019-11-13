import React, { Component } from 'react'
import { ThemeContext, LangContext } from './context';
export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Son',
      lastname: 'Gohan',
      width: window.innerWidth
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.resizeWindow = this.resizeWindow.bind(this);
  }

  onChangeName(e) {
    this.setState({name: e.target.value})
  }
  onChangeLastname(e) {
    this.setState({lastname: e.target.value})
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.lastname;
    window.addEventListener('resize', this.resizeWindow);
  }
  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.lastname;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  resizeWindow() {
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {(theme) =>
            <>
              <div className="jumbotron">
                  <h1 className="display-4">Hello, world! Class</h1>
              </div>
              <div className={`alert alert-${theme}`}>
                <input value={this.state.name} onChange={this.onChangeName} />
                <p><strong>Name: </strong></p>
                <p>{this.state.name}</p>
              </div>
              <div className={`alert alert-${theme}`}>
                <input value={this.state.lastname} onChange={this.onChangeLastname} />
                <p><strong>LastName: </strong></p>
                <p>{this.state.lastname}</p>
              </div>
              <LangContext.Consumer>
                {(lang) =>
                  <>
                    <div className="jumbotron">
                      you speak: <strong>{lang}</strong>
                    </div>
                  </>
                }
              </LangContext.Consumer>

              <div className="jumbotron">
                Window With: <strong>{this.state.width}</strong>
              </div>
            </>
          }
        </ThemeContext.Consumer>
      </>
    )
  }
}