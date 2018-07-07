import React, { Component } from 'react';
import './Login.css';
import firebase from '../firebase.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Login extends Component {
  constructor() {
      super();
      this.state = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          showSignup: false
      }
      this.handleLogin = this.handleLogin.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    console.log('handling')
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
        console.log(error.code)
        console.log(error.message)
    })
    .then(user => {
        var userRef = firebase.database().ref('users')
        console.log(userRef)
        userRef.push({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        })
        console.log(firebase.auth().currentUser)
    })
    
  }

  handleLogin(e) {
      e.preventDefault();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
                console.log(error.code);
                console.log(error.message);
              })
              .then(user => {
                  console.log(user)
                  console.log(firebase.auth().currentUser)
              })
        })
  }

  render() {
    console.log(firebase.auth().currentUser)
    if (this.state.showSignup) {
        return(
            <div className="Signup">
                <form onSubmit={this.handleSignup}>
                    <div className = "Login-emailWrapper">
                        <input type='text' placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className = "Login-passwordWrapper">
                        <input type='text' placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <div className = "Login-firstName">
                        <input type='text' placeholder="First Name" onChange={(e) => this.setState({firstName: e.target.value})}/>
                    </div>
                    <div className = "Login-firstName">
                        <input type='text' placeholder="Last Name" onChange={(e) => this.setState({lastName: e.target.value})}/>
                    </div>
                    <div className="Login-signupWrapper">
                        <button className="Login-signup" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        ) 
    }
    else {
        return (
            <div className="Login">
              <form onSubmit={this.handleLogin}>
                  <div className = "Login-emailWrapper">
                      <input type='text' placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                  </div>
                  <div className = "Login-passwordWrapper">
                      <input type='text' placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
                  </div>
                  <div className = "Login-buttonWrapper">
                      <button type='submit' className="LoginButton">Login</button>
                  </div>
              </form>
              <div className="Login-signupWrapper">
                  <button className="Login-signup" onClick={(e) => this.setState({showSignup: true})}>Sign Up</button>
              </div>
            </div>
          );
    }

    
  }
}

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//     return {
//       user: state.user
//     }
//   }
  
//   const mapDispatch = (dispatch) => {
//     return {
//       isLoggedIn() {
//         dispatch(me())
//       }
//     }
//   }
  
// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect()(Login)

