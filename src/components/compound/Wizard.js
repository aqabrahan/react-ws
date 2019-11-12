
import React, {Component} from 'react';

class SimpleProcess extends Component {

  state = { activeIndex: 0 };
  changeIndex = (event, newIndex) => {
    event.preventDefault();
    this.setState({ activeIndex: newIndex });
  }
  isActive = (index) => {
    return index === this.state.activeIndex;
  }

  render() {
    return (
      <div>
        <header className='nav nav-tabs'>
          {this.props.steps.map((step, index) => (
            <div className='nav-item'>
              <a
                className={`nav-link ${this.isActive(index) ? 'active' : ''}`}
                onClick={(event) => this.changeIndex(event, index)}
                href='#'
              >
                {step.label}
              </a>
            </div>
          ))}
        </header>
        <div>
          {this.props.steps
            .filter((_, index) => this.isActive(index))
            .map(step => (
              <article className='content-area'>
                <step.component />
              </article>
          ))}
        </div>
      </div>
    );
  }
}

export default SimpleProcess;