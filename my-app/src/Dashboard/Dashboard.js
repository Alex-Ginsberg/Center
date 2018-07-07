import React, { Component } from 'react';
import './Dashboard.css';
import firebase from '../firebase.js';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        console.log(this.state)
        const userRef = firebase.database().ref().child('users')
        userRef.once('value')
            .then(snapshot => {
                const users = snapshot.val()
                let userInfo = null
                for (let key in users) {
                    if (users[key].email === this.props.user.email) {
                        userInfo = users[key]
                    }
                }
                this.setState({userInfo})
            })
    }

    render() {
        let ifUser = this.state.userInfo.email ? <p>hi</p> : <p>bye</p>
        return (
        <div>
            {ifUser}
        </div>
        
        );
    }
}

export default Dashboard;