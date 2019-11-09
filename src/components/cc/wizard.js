import React, { Component } from 'react';
import Progress, {Scene} from './components/progress';
import Steps, {Step} from './components/steps';

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: props.scene
    }
  }

	static Progress = Progress
	static Steps = Steps
	static Scene = Scene
  static Step = Step

	handleClick = () => {
		this.setState({ scene: this.state.scene + 1 });
	}
	render() {
		const { scene } = this.state;
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {scene, handleClick: this.handleClick})
		})
		return (
			<div className="container">
				{children}
			</div>
		);
	}
}

Wizard.defaultProps = {
  scene: 1
}
export default Wizard;