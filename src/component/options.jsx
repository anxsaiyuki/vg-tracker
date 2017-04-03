import React, { Component } from 'react';

import '../css/options.css';

export default class Options extends Component {
	constructor(props) {
		super(props)
		this.state = {
			powerLevel: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
			operator: "+"
		}
	}

	onSelect(value) {
		console.log(value);
		this.props.onSelect(value);
	}

	selectOperator() {
		if (this.state.operator === "+") {
			this.setState({ operator:"-" });
			this.props.onOperatorSelect("-")
		} else {
			this.setState({ operator:"+" });
			this.props.onOperatorSelect("+")
		}
	}

	onReset() {
		this.props.onReset();
	}

	render() {
		var context = this;
		var powerNode = this.state.powerLevel.map(function(value) {
			return (
				<li 
					className={context.props.selected === value ? "powerItem selected" : "powerItem"} 
					onClick={context.onSelect.bind(context,value,"value")}
				>
					<div className="powerValue">{value}</div>
				</li>
			)
		})
		return (
			<div id="options-container">
				<div id="options">
				  <ul id="powerList">
				  <li className="powerItem operator" onClick={this.selectOperator.bind(this)}>
				  	<div className="powerValue">{this.state.operator}</div>
				  </li>
				  {powerNode}
				  <li className="powerItem">
				  	<div className="powerValue">Crit</div>
				  </li>
				  <li className="powerItem" onClick={this.onReset.bind(this)}>
				  	<div className="powerValue">Reset</div>
				  </li>
				  </ul>
				</div>
			</div>
		)
	}
}