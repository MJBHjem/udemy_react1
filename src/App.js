import React, { Component } from 'react'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { userInput: '' }
    this.handleTextChg = this.handleTextChg.bind(this)
  }

  handleTextChg (event) {
    this.setState({ userInput: event.target.value })
  }

  render () {
    const uInput = this.state.userInput
    const validTxt = uInput.length > 4 ? 'text long enough' : 'text too short'
    return (
      <div>
        <input
          type='text'
          onChange={this.handleTextChg}
          value={this.state.userInput}
        />
        <p>{uInput} <span>{validTxt}</span></p>
        <CharComponent />
      </div>
    )
  }
}

export default App
