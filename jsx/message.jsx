import React, { Component } from 'react';

class Message extends Component {
    render() {
        return(
            <div className="message">
                <p>TEST MESSAGE</p>
                <strong>{this.props.user} :</strong>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

module.exports = Message;
