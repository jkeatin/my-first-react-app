import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: 'James', age: 31 },
      { id: '002', name: 'Jess', age: 29 },
      { id: '003', name: 'Bilbo', age: 7 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object({},this.state.persons[personIndex]) // same as above but old way of doing it

    person.name = event.target.value;

    const persons = [...this.state.persons];
    person[personIndex] = person;

    this.setState({person: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // Create a copy of the persons array's current state in a new array
    const persons = [...this.state.persons]; // this is an ES6 way of creating a copy of the persons array's current state in a new array
    
    /* ^^ You want to create a new copy of the state array so that you are editing an immutable version of the data, not one that has a reference point back to the original */
  
    persons.splice(personIndex, 1); // Remove one item at the index in the array that is passed in
    this.setState({persons: persons}); // update the state of persons to the contents of the new spliced array
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow}) // this will toggle the bool value
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { //Takes the current state of the persons array and passes each item into this function which returns each element as a Person component
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })
          }
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
