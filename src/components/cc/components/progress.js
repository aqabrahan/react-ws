import React, {Component} from 'react';

export const Scene = ({scene, num}) => (
	<div className={addStyle(scene, num)}>
		{renderIcon(scene, num)}
	</div>
)

const renderIcon = (scene, num) => {
	if (scene === num) {
		return <div className="number number_active">A</div>;
	} else if (scene < num) {
		return (
			<div className="number">
				{num}
			</div>
		);
	}
	return <img style={{ width: '50px' }} src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png" />;
};

const addStyle = (current, circleSection) => {
	if (current === circleSection) {
		return "active";
	} else if (current > circleSection) {
		return "pending";
	}
	return "circle";
};

export default class Progress extends Component {
  render(){
    const {scene} = this.props
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {scene})
		})
    return(
      <div className="progress-container">
        {children}
      </div>
    )
  }
}
