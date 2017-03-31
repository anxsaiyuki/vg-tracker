import React, { Component } from 'react';
import BoardItem from './boardItem';

import '../css/board-item.css';

export default class Board extends Component {
	constructor(props) {
		super(props)	
		this.state = {
			item: [
				{
					id: 1,
					trigger: 0,
					atk: 0,
				},
				{
					id: 2,
					trigger: 0,
					atk: 0,
				},
				{
					id: 3,
					trigger: 0,
					atk: 0,
				},
				{
					id: 4,
					trigger: 0,
					atk: 0,
				},
				{
					id: 5,
					trigger: 0,
					atk: 0,
				},
				{
					id: 6,
					trigger: 0,
					atk: 0,
				},
			]
		}
	}

	render() {
		var context = this;

		var boardItems = this.state.item.map(function(item, key) {
			return (
				<BoardItem onSelect={context.props.onSelect} value={item} selected={context.props.selected === item.id ? true : false}/>
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