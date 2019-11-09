import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export const Step = ({ num, text }) => (
  <div key={num} className="step-content">
    {text}
  </div>
);

class Steps extends Component {
  render() {
    const { scene, handleClick } = this.props;
    const count = React.Children.count(this.props.children);
    const children = React.Children.map(this.props.children, child => {
      return (
        scene === child.props.num && (
          <>
            {child}
          </>
        )
      );
    });
    return (
      <div className="container_steps">
        <div className="container_scene">
          {children}
        </div>
        <div className="container_btn">
          <Button disabled={scene === count} onClick={handleClick}>
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

export default Steps;
