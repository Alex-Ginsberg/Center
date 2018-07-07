import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js';
import Hero from './Hero/Hero.js';
import Login from './Login/Login.js';
import Dashboard from './Dashboard/Dashboard.js';
import {connect} from 'react-redux'
import { checkUser, authSet } from './store'
import firebase from './firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.setState({currentUser: user})
      }
    }.bind(this))
  }

  render() {
    let view = this.state.currentUser.email ? <Dashboard user={this.state.currentUser} /> : <Login />;
    return (
      <div className="App">
        <Header />
        <Hero />
        {view}
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
    },
    setUser(user) {
      dispatch(authSet(user));
    }
  }
}

export default connect(mapState, mapDispatch)(App);
