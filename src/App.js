import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 31 },
      { name: 'Jess', age: 29 },
      { name: 'Bilbo', age: 7 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'James Keating';
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Jess', age: 29 },
        { name: 'Bilbo', age: 7 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'James', age: 31 },
        { name: event.target.value, age: 29 },
        { name: 'Bilbo', age: 7 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('James Keating')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'James Keating!!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

  }
}

export default App;
