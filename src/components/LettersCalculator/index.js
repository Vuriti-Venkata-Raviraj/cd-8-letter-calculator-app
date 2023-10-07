// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  count = event => {
    const lengthOfInput = event.target.value
    this.setState({
      letterCount: lengthOfInput.length,
    })
  }

  render() {
    const {letterCount} = this.state

    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label className="enter-name" htmlFor="Enter the phrase">
            Enter the phrase
          </label>
          <p> </p>
          <input
            className="input-element"
            type="text"
            onChange={this.count}
            id="Enter the phrase"
          />
          <div className="count">
            <p>No.of letters: {letterCount}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
