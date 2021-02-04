import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28, hobby: 'skipping' },
      { name: 'Manu', age: 29, hobby: 'football' },
      { name: 'Stephanie', age: 26, hobby: 'racing' }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Jim', age: 75, hobby: 'running' },
        { name: 'Jane', age: 64, hobby: 'coding' },
        { name: 'Michelle', age: 49, hobby: 'jumping' }
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is one click name switcher using React Hooks.</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}>My hobby is {personsState.persons[0].hobby}</Person>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My hobby is {personsState.persons[1].hobby}</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}>My hobby is {personsState.persons[2].hobby}</Person>
    </div>
  );
}

export default App;
