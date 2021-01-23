import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      persons: [
        { name: 'A', age: '12' },
        { name: 'B', age: '212' },
        { name: 'C', age: '123' }
      ]
    }
    this.handleSwitchName = this.handleSwitchName.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleSwitchName (newName) {
    this.setState({
      persons: [
        { name: 'Manix', age: '12' },
        { name: newName, age: '312' },
        { name: 'Ally', age: '1003' }
      ]
    })
  }

  handleChangeName (event) {
    this.setState({
      persons: [
        { name: 'Manix', age: '12' },
        { name: event.target.value, age: '312' },
        { name: 'Ally', age: '1003' }

      ]
    })
  }

  render () {
    const { persons } = this.state
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '24px'
    }

    return (
      <div className='App'>
        {/* alternative form to the bind solution - could be performant prob.  */}
        <button style={style} onClick={() => this.handleSwitchName('Mr.Max')}>Switch</button>
        <Person
          name={persons[0].name}
          age={persons[0].age}
        />
        <Person
          // this bind solution allows us to pass a param with parens wo it getting fired for an infinite loop
          onClickItem={this.handleSwitchName.bind(this, 'Mrs.Max')}
          name={persons[1].name}
          age={persons[1].age}
          onChangeName={this.handleChangeName}
        >
          My Hobbies Are Skiiing
        </Person>
        <Person
          name={persons[2].name}
          age={persons[2].age}
        />

      </div>
    )
  }
}

export default App
