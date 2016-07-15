import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {
    render() {
      let renderMessage = function(message){
        return(<Message msg={message.text} />)}
    return(
    <ul className="message">
        {this.props.messages.map(renderMessage)}
    </ul>
        );
    }
}

module.exports = MessageList;
