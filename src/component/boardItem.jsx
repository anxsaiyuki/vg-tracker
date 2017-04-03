import React, { Component } from 'react';

import '../css/board-item.css';

export default class BoardItem extends Component {
	constructor(props) {
		super(props)	
	}

	onItemSelect(value) {
		this.props.onBoardSelect(value);
	}

	render() {
		return (
			<div className="item" onClick={this.onItemSelect.bind(this, this.props.value.id)}>
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