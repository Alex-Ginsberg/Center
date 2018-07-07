import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js';
import Hero from './Hero/Hero.js';
import Login from './Login/Login.js';
import {connect} from 'react-redux'
import { checkUser } from './store'

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.isLoggedIn()
  }

  render() {
    console.log(this.props.user)
    return (
      <div className="App">
        <Header />
        <Hero />
        <Login />
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    isLoggedIn() {
      dispatch(checkUser());
    }
  }
}

export default connect(mapState, mapDispatch)(App);
