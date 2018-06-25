import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor () {
    super ();
    this.state = {
      cars: [
        {
          make: 'Chevy',
          model: 'Camaro',
          price: 30000,
        },
        {
          make: 'Ford',
          model: 'Mustang',
          price: 35000,
        },
        {
          make: 'Dodge',
          model: 'Challenger',
          price: 40000,
        }
      ],

      userInput: "",
      filteredArray: [],
  }
}
  makeChange (val) {
    this.setState({userInput : val});
  }
  filterCars (prop) {
    const filteredArray = [];
    const cars = this.state.cars;
    for (let i=0; i<cars.length; i++) {
      if (cars[i].hasOwnProperty(prop)) {
        filteredArray.push(cars[i]);
      }
    }
    this.setState({filteredArray : filteredArray})
  }
  render() {
    return (
      <div className= 'puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className= 'puzzleText'> Original Array : {JSON.stringify(this.state.cars, null, 10)}</span>
        <input className= 'inputLine' onChange = {(event) => this.makeChange(event.target.value)}></input>
        <button className= 'confirmationButton' onClick = {() => this.filterCars(this.state.userInput)}>Filter</button>
        <span className= 'resultsBox filterObjectRB'>Filtered Array : {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}
