import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from './component/Increment';

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
