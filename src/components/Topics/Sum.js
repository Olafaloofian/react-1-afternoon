import React, { Component } from 'react'

export default class Sum extends Component {
    constructor () {
        super ();

        this.state = {
            userInput1: 0,
            userInput2: 0,
            sum: null,
        }
    }
    newInput1 (num) {
        this.setState ({ userInput1: Number(num) })
    }
    newInput2 (num) {
        this.setState ({ userInput2: Number(num) })
    }
    addNums (num1, num2) {
        this.setState ({ sum : num1 + num2 })
    }
    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" type="number" onChange = {e=> this.newInput1(e.target.value)}/>
                <input className="inputLine" type="number" onChange = {e=> this.newInput2(e.target.value)}/>
                <button className="confirmationButton" onClick = {() => this.addNums(this.state.userInput1, this.state.userInput2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}