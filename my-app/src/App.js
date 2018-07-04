import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js';
import Hero from './Hero/Hero.js';
import Login from './Login/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Login />
      </div>
    );
  }
}

export default App;
