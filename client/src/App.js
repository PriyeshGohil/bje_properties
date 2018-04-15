import React, { Component } from 'react';
import logo from './logo.svg';
import LoginForm from './Admin/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm/> 
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
