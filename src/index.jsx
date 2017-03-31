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
    }
  }

  onSelect(value) {
    this.setState({ selected:value })
    console.log("test" + value);
  }

  render() {
    return (
      <div>
        <Board onSelect={this.onSelect.bind(this)} selected={this.state.selected}/>
        <Options />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
