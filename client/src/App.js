import React, { Component } from 'react';
import logo from './logo.svg';
import LoginForm from './Admin/LoginForm';
import './App.css';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm/>
      </div>
    );
  }
}

export default App;
