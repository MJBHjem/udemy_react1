import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      persons: [
        { id: '0', name: 'A', age: '12' },
        { id: '1', name: 'B', age: '212' },
        { id: '2', name: 'C', age: '123' }
      ],
      show: true
    }
    this.handleSwitchName = this.handleSwitchName.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeShow = this.handleChangeShow.bind(this)
    this.handleDeleteName = this.handleDeleteName.bind(this)
  }

  handleSwitchName (newName) {
    
    const personsCpy = [...this.state.persons]
    personsCpy[0].name = 'Bill'
    personsCpy[1].name = 'Hillary'
    personsCpy[2].name = 'Chelsea'

    this.setState({
      persons: personsCpy
    })
  }

  handleChangeName (idx, event) {
    const personIdx = this.state.persons.findIndex(p => {
      return idx === parseInt(p.id, 10)
    })
    const person2Chgd = { ...this.state.persons[personIdx] }

    person2Chgd.name = event.target.value
    const personsCpy = [...this.state.persons]
    personsCpy[personIdx] = person2Chgd
    this.setState({ persons: personsCpy })
  }

  handleChangeShow (event) {
    this.setState(prevState => {
      return {
        ...prevState,
        show: !prevState.show
      }
    })
  }

  handleDeleteName (personIdx) {
    const persons = [...this.state.persons] // ensure a copy of the state.persons rather than a pointer
    persons.splice(personIdx, 1)
    this.setState({ persons: persons })
  }

  render () {
    // const { persons } = this.state
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '24px'
    }
    let personsJSX = null
    if (this.state.show) {
      personsJSX = (
        <div>
          {
          this.state.persons.map((person, index) => {
            return (
              <Person
                onDelItem={this.handleDeleteName.bind(this, index)}
                onChangeName={this.handleChangeName.bind(this, index)}
                key={person.id}
                name={person.name}
                age={person.age}
              />
            )
          })

          // <Person name={persons[0].name} age={persons[0].age} />
          // <Person
          //   // this bind solution allows us to pass a param with parens wo it getting fired for an infinite loop
          //   onClickItem={this.handleSwitchName.bind(this, 'Mrs.Max')}
          //   name={persons[1].name}
          //   age={persons[1].age}
          //   onChangeName={this.handleChangeName}
          // >
          //   My Hobbies Are Skiiing
          // </Person>
          // <Person name={persons[2].name} age={persons[2].age} />
          }
        </div>
      )
    }

    return (
      <div className='App'>
        {/* alternative form to the bind solution - could be performant prob.  */}
        <button style={style} onClick={() => this.handleSwitchName('Mr.Max')}>
          Switch Names
        </button>
        <button style={style} onClick={() => this.handleChangeShow()}>
          Switch Show
        </button>
        {personsJSX}
      </div>
    )
  }
}

export default App
