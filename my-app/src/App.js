import React from 'react';
import Nav1 from './components/Nav';
import './App.css';
import GenerateFact from './components/GenerateFact';

function App() {
  return (
    <div className="App">
      <Nav1 />
      <h1>Cat Facts App</h1>
      <GenerateFact />
    </div>
  );
}

export default App;
