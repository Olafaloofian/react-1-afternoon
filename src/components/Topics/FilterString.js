import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor () {
    super ();

    this.state = {
      unFilteredArray: ["red", 'green', 'blue', 'yellow', 'orange', 'pink', 'brown', "grey", 'tan'],
      userInput: "",
      filteredArray: [],
    }
  }
  changeInput (yo) {
    this.setState({userInput : yo});
  }
  filterStings (value) {
    const filteredColors = [];
    for (let i=0; i<this.state.unFilteredArray.length; i++){
      if (this.state.unFilteredArray[i].includes(value)) {
        filteredColors.push(this.state.unFilteredArray[i])
      }
    }
    this.setState({filteredArray : filteredColors})
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>FilterString</h4>
        <span className="puzzleText">Original Array : {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input className="inputLine" onChange = {e => this.changeInput(e.target.value)}></input>
        <button className="confirmationButton" onClick = { () => this.filterStings(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Colors : {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}