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
				<div id="row-btn-container">
					<button type="button" className="row-btn waves-effect waves-light btn indigo darken-1" onClick={this.onBoardRowSelect.bind(this,"row1")}>Row 1</button>
					<button type="button" className="row-btn waves-effect waves-light btn indigo darken-1" onClick={this.onBoardRowSelect.bind(this,"row2")}>Row 2</button>
				</div>
				<div id="board">
					<div id="board-item-container">
					{boardItems}
					</div>
					<div id="column-btn-container">
						<button type="button" className="col-btn waves-effect waves-light btn" onClick={this.onBoardColSelect.bind(this,"col1")}><div><span>Col1</span></div></button>
						<button type="button" className="col-btn waves-effect waves-light btn" onClick={this.onBoardColSelect.bind(this,"col2")}><div>Col2</div></button>
						<button type="button" className="col-btn waves-effect waves-light btn" onClick={this.onBoardColSelect.bind(this,"col3")}><div>Col3</div></button>
					</div>
				</div>
			</div>
		)
	}
}