import React, { Component } from 'react'
import Person from './Person/Person'

import classes from './App.css'

import styled from 'styled-components'

import './App.css'

const ButtonStyler = styled.button`
  background-color: ${(props) => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Marcos', age: 33 },
      { id: 2, name: 'Elizabeth', age: 32 },
      { id: 3, name: 'Julie', age: 33 },
    ],
    showPersons: false,
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex],
    }

    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(e) => this.nameChangedHandler(e, person.id)}
            />
          ))}
        </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    let assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) // classes will be ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) // classess will be ['red', 'bold']
    }

    return (
      <div className='App'>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={classes.Button}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App
