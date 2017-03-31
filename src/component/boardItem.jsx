import React, { Component } from 'react';

import '../css/board.css';

export default class BoardItem extends Component {
	constructor(props) {
		super(props)	
	}

	selected() {
		this.props.onSelect(this.props.value.id)
	}

	render() {
		return (
			<div onClick={this.selected.bind(this)} className={this.props.selected ? "item selected" : "item"}>
				<div className="item-container">
					<div>
					<div className="trigger">
						<label>TRIGGER</label>
						<div>{this.props.value.trigger}</div>
					</div>
					<div className="attack">
						<label>ATTACK</label>
						<div>{this.props.value.atk}</div>
					</div>
					</div>
				</div>
			</div>
		)
	}
}