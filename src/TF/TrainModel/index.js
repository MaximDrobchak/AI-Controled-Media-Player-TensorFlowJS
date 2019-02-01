import React, { Component } from 'react';

export default class extends Component {
  render () {
    return (
      <div>
        <button id='controled' onMouseDown='collect(0)' onMouseUp='collect(null)'>
          Ok! Player Controled
        </button>
        <button id='back' onMouseDown='collect(1)' onMouseUp='collect(null)'>
          Back
        </button>
        <button id='next' onMouseDown='collect(2)' onMouseUp='collect(null)'>
          Next
        </button>
      </div>
    );
  }
}
