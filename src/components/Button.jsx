import React,{ Component, PropTypes } from 'react';
import Label from './Label.jsx';
export default class Button extends React.Component {

    handleClieck() {

        MuipAlert.alert("hello forum")
    }

    render() {
        return (
            <div>
                <div className="hero">
                    <div className="hero-title">
                        <h1>forum app</h1>
                        <Label/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Button;