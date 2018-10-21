import React, { Component } from 'react';
import './App.css';
import Increment from './components/Increment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Increment />
      </div>
    );
  }
}

export default App;
