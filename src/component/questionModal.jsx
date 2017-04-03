import React, { Component } from 'react';

import '../css/questionModal.css';

export default class QuestionModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<div className="remodal" data-remodal-id="modal" data-remodal-options="hashTracking: false">
  		  <button data-remodal-action="close" className="remodal-close"></button>
  		  <h6>Question</h6>
        <div>
          <label className="question-label">Add/Minus</label>
          <div className="question-description">Press the +/- to toggle for add or subtract</div>
          <label className="question-label">Power Levels</label>
          <div className="question-description">Press the power levels to select the desired power. Then click on the desired circle to add or subtract</div>
          <label className="question-label">Row and Column</label>
          <div className="question-description">For easier access to rows and columns select the desired power and click on row/column to add all</div>
          <label className="question-label">Trigger(Crit)</label>
          <div className="question-description">To add a trigger select the crit option and click on the desired circle</div>
          <label className="question-label">Reset</label>
          <div className="question-description">Option will reset all the values return them all to 0</div>
        </div>
  		  <button data-remodal-action="cancel" className="remodal-cancel">Cancel</button>
  		</div>
  	)
  }
}