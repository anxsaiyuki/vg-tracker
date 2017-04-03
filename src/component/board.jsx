import React, { Component } from 'react';
import BoardItem from './boardItem';

import '../css/board.css';

export default class Board extends Component {
	constructor(props) {
		super(props)	
	}

	onBoardRowSelect(row) {
		this.props.onBoardRowSelect(row);
	}

	onBoardColSelect(col) {
		this.props.onBoardColSelect(col);
	}

	render() {
		var context = this;

		var boardItems = this.props.item.map(function(item, key) {
			return (
				<BoardItem onBoardSelect={context.props.onBoardSelect} value={item}/>
			)
		})

		return (
			<div id="board-container">
				<div id="button-container">
					<button type="button" className="row-btn" onClick={this.onBoardRowSelect.bind(this,"row1")}>Row 1</button>
					<button type="button" className="row-btn" onClick={this.onBoardRowSelect.bind(this,"row2")}>Row 2</button>
				</div>
				<div id="board">
					<div className="board-container">
					{boardItems}
					</div>
					<div className="column-btn-container">
						<button type="button" className="col-btn" onClick={this.onBoardColSelect.bind(this,"col1")}><div>Col 1</div></button>
						<button type="button" className="col-btn" onClick={this.onBoardColSelect.bind(this,"col2")}><div>Col 2</div></button>
						<button type="button" className="col-btn" onClick={this.onBoardColSelect.bind(this,"col3")}><div>Col 3</div></button>
					</div>
				</div>
			</div>
		)
	}
}