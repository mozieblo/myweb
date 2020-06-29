import React from 'react';
import Persons from './containers/Persons';
import Weather from './components/Weather/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
        <Persons />
        <Weather />
    </div>
  );
}

export default App;
