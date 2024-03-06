import React from 'react';
import './App.css';
import Person from './Person';

const App = () => {
  return (
    <div className="App">
      <h1>Hello world</h1>
     <Person name='John' age={43} />
    </div>
  );
}

export default App;
