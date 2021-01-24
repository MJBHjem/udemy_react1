import React, { Component } from 'react'

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
    return (
      <div>
        <input
          type='text'
          onChange={this.handleTextChg}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default App
