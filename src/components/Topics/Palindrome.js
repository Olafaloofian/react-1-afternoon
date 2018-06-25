import React, {Component} from 'react'

export default class Palindrome extends Component {
    constructor () {
        super ();

        this.state = {
            userInput: "",
            palindrome: "",
        }
    }
    changeInput (input) {
        this.setState ({userInput: input})
    }
    checkPalindrome (input) {
        const forwards = input;
        var backwards = input;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
        forwards === backwards ? this.setState({ palindrome : 'true' }) : this.setState({ palindrome : 'false'})
        }
    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className="inputLine" onChange = {e => this.changeInput(e.target.value)}/>
                <button className='confirmationButton' onClick = {() => this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome : {this.state.palindrome}</span>
            </div>
        )
    }
}