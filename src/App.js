import React, { Component } from 'react'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { userInput: '' }
    this.handleTextChg = this.handleTextChg.bind(this)
    this.handleCharDelete = this.handleCharDelete.bind(this)
  }

  handleTextChg (event) {
    this.setState({ userInput: event.target.value })
  }

  handleCharDelete (id) {
    const uInput = this.state.userInput
    const newUserInput = [...uInput.slice(0, id), ...uInput.slice(id+1)].join('')
    this.setState({ userInput: newUserInput })
  }

  render () {
    const uInput = this.state.userInput
    const validTxt = uInput.length > 4 ? 'text long enough' : 'text too short'
    const charList = [...uInput].map((c, i) => {
      return <CharComponent key={i} id={i} char={c} onCk={() => this.handleCharDelete(i)} />
    })

    return (
      <div>
        <input
          type='text'
          onChange={this.handleTextChg}
          value={this.state.userInput}
        />
        <p>{uInput} <span>{validTxt}</span></p>

        {charList}
      </div>
    )
  }
}

export default App
