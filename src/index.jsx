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
      triggerBool: false,
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
      ],
      inst: ''
    }
  }

  componentDidMount() {
    let context = this;
    $( document ).ready(function() {
      context.setState({
        inst:$('[data-remodal-id=modal]').remodal()
      })
    });
  }

  debugLog(str) {
    console.log(str);
  }

  //Power Clicked
  onSelect(value) {
    this.setState({ 
      selected: value,
      triggerBool: false,
    })
    this.debugLog("selected: " + value);
  }

  //Single Board Clicked
  onBoardSelect(id) {
    this.debugLog(id);
    var tempItem = this.state.item;
    if (this.state.selected !== null) {
      if (this.state.operator === "+") {
        tempItem[id].atk += this.state.selected;  
      } else {
        tempItem[id].atk -= this.state.selected;
      }
    } else if (this.state.triggerBool) {
      tempItem[id].trigger += 1;
    }
    this.setState({ item:tempItem })
  }

  //Row Button Clicked
  onBoardRowSelect(row) {
    if (this.state.triggerBool) {
      return
    }

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

  //Column Button Clicked
  onBoardColSelect(col) {
    if (this.state.triggerBool) {
      return
    }

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

  //Operator +/- Clicked
  onOperatorSelect(operator) {
    this.debugLog(operator);
    this.setState({ operator: operator });
  }

  //Trigger Crit Clicked
  onTriggerSelect() {
    this.debugLog("trigger clicked")
    this.setState({ 
      triggerBool: true,
      selected: null,
    });
  }

  //Reset Clicked
  onReset() {
    this.debugLog("going to reset")
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
      item: resetValue,
      selected: null,
      triggerBool: false,
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
          onTriggerSelect={this.onTriggerSelect.bind(this)}
          onSelect={this.onSelect.bind(this)} 
          selected={this.state.selected}
          triggerBool={this.state.triggerBool}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
