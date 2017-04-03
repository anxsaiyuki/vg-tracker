import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './component/board'
import Options from './component/options'

import './css/index.css';

class Index extends Component {
  constructor(){
    super()

    this.state = {
      selected: null,
      operator: "+",
      item: [
        {
          id: 0,
          trigger: 0,
          atk: 0,
        },
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
      ]
    }
  }

  onSelect(value) {
    this.setState({ selected:value })
    console.log("selected: " + value);
  }

  onBoardSelect(id) {
    console.log(id);
    if (this.state.selected !== null) {
      var tempItem = this.state.item;
      if (this.state.operator === "+") {
        tempItem[id].atk += this.state.selected;  
      } else {
        tempItem[id].atk -= this.state.selected;
        if (tempItem[id].atk < 0) {
          tempItem[id].atk = 0;
        }
      }
      this.setState({ item:tempItem })
    }
  }

  onBoardRowSelect(row) {
    var row1 = [0, 2, 4];
    var row2 = [1, 3, 5];
    if (row === "row1") {
      row1.map((index) => {
        this.onBoardSelect(index)
      })
    } else {
      row2.map((index) => {
        this.onBoardSelect(index)
      })
    }
  }

  onBoardColSelect(col) {
    var col1 = [0, 1];
    var col2 = [2, 3];
    var col3 = [4, 5];
    if (col === "col1") {
      col1.map((index) => {
        this.onBoardSelect(index)
      })
    } else if (col === "col2") {
      col2.map((index) => {
        this.onBoardSelect(index)
      })
    } else {
      col3.map((index) => {
        this.onBoardSelect(index)
      })
    }

  }

  onOperatorSelect(operator) {
    console.log(operator);
    this.setState({ operator: operator });
  }

  onReset() {
    console.log("going to reset")
    var resetValue = [
      {
        id: 0,
        trigger: 0,
        atk: 0,
      },
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
    ]
    this.setState({ 
      item:resetValue,
      selected:null
    })
  }

  render() {
    return (
      <div>
        <Board 
          onBoardSelect={this.onBoardSelect.bind(this)} 
          item={this.state.item}
          onBoardRowSelect={this.onBoardRowSelect.bind(this)}
          onBoardColSelect={this.onBoardColSelect.bind(this)}
        />
        <Options 
          onReset= {this.onReset.bind(this)} 
          onOperatorSelect={this.onOperatorSelect.bind(this)} 
          onSelect={this.onSelect.bind(this)} 
          selected={this.state.selected}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
