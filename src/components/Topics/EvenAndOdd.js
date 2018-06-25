import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor () {
      super();

      this.state = {
          evenArray: [],
          oddArray: [],
          userInput: "",
      }
  }
  changeUserInput (input) {
        this.setState ({
            userInput: input,
        })
  }
  solveArray () {
      const numbers = this.state.userInput.split(",")
      console.log(numbers)
        this.setState ({
            evenArray: numbers.filter(value => value % 2 === 0).map(str => parseInt(str, 10)),
            oddArray: numbers.filter(value => value % 2 === 1).map(str => parseInt(str, 10)),
        })
  }
    render() {
        console.log(this.state.evenArray)
    return (
        <div className = 'puzzleBox evenAndOddPB'>
            <h4> Evens and Odds</h4>
            <input className = 'inputLine' onChange = {(event) => this.changeUserInput(event.target.value)}></input>
            <button className="confirmationButton" onClick = {() => this.solveArray(this.state.userInput)}>Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
        </div>
    )
  }
}