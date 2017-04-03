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
		this.props.onSelect(value);
	}

	onOperatorSelect() {
		if (this.state.operator === "+") {
			this.setState({ operator:"-" });
			this.props.onOperatorSelect("-")
		} else {
			this.setState({ operator:"+" });
			this.props.onOperatorSelect("+")
		}
	}

	onTriggerSelect() {
		this.props.onTriggerSelect();
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
					<div className={value === 5000 ? "powerValue triggerValue" : "powerValue"}>{value}</div>
				</li>
			)
		})
		return (
			<div id="options-container">
				<div id="options">
				  <ul id="powerList">
				  <li className="powerItem operator" onClick={this.onOperatorSelect.bind(this)}>
				  	<div className="powerValue">
				  		{this.state.operator === "+" ?
				  			(<span><i className="fa fa-plus-circle" aria-hidden="true"></i></span>) :
				  			(<span><i className="fa fa-minus-circle" aria-hidden="true"></i></span>)
				  		}
				  	</div>
				  </li>
				  {powerNode}
				  <li className={this.props.triggerBool ? "powerItem selected" : "powerItem"}  onClick={this.onTriggerSelect.bind(this)}>
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