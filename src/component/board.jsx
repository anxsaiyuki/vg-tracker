import React, { Component } from 'react';
import BoardItem from './boardItem';

import '../css/board.css';

export default class Board extends Component {
	constructor(props) {
		super(props)	
		this.state = {
			row: [1, 2, 3, 4, 5, 6]
		}
	}

	render() {
		var context = this;

		var boardItems = this.state.row.map(function(item) {
			return (
				<BoardItem onSelect={context.props.onSelect} value={item} selected={context.props.selected === item ? true : false}/>
			)
		})

		return (
			<div id="board-container">
				<div id="board">
				{boardItems}
				</div>
			</div>
		)
	}
}