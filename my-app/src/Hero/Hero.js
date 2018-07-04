import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
        <div className="Hero">
            <div className="Hero-wrapper">
                <h1 className="Hero-title">
                    Life Management
                </h1>
                <h3 className="Hero-subtitle">
                    Made Easy
                </h3>
            </div>
        </div>
        );
    }
}

export default Hero;