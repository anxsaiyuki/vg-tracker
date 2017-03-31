import React, { Component } from 'react';

import '../css/board.css';

export default class BoardItem extends Component {
	constructor(props) {
		super(props)	
	}

	selected() {
		this.props.onSelect(this.props.value)
	}

	render() {
		return (
			<div onClick={this.selected.bind(this)} className="item">
				<div className={this.props.selected ? "item-container selected" : "item-container"}>
					{this.props.value}
				</div>
			</div>
		)
	}
}