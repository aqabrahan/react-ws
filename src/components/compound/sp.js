import React from 'react';

class SimpleProcess extends React.Component {
  state = { activeIndex: 0 };
  changeIndex = (event, newIndex) => {
    event.preventDefault();
    this.setState({ activeIndex: newIndex });
  }
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, childElement =>
          React.cloneElement(childElement, {
            activeIndex: this.state.activeIndex,
            changeIndex: this.changeIndex,
          })
        )}
      </div>
    );
  }
}

export default SimpleProcess;