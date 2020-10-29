import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'James', age: '31' }, 
      { name: 'Jess', age: '29' }, 
      { name: 'Bilbo', age: '7' }
    ]
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'James Keating'
    this.setState( {
      persons: [
        { name: 'James Keating', age: '31' }, 
        { name: 'Jess', age: '29' }, 
        { name: 'Bilbo', age: '7' }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Running and Cycling</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
