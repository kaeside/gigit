import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';


class Chatty extends React.Component{
  constructor() {
      super();
      this. _messageRecieve = this. _messageRecieve.bind(this);
      this. _handleMessageSubmit = this. _handleMessageSubmit.bind(this);

      socket.on('send:message', this._messageRecieve);

    this.state =  { messages:[], text: ''}
   }

    _messageRecieve(message){
        this.state.messages.push(message);
        this.setState();
    }
    _handleMessageSubmit(message){
        this.state.messages.push(message);
        this.setState();
        socket.emit('send:message', message);
    }
    render(){
        return(
            <div className="chatty">
                <Title text="Chat"/>
                <MessageList messages={this.state.messages}/>
                <MessageForm submitfnc={this._handleMessageSubmit}/>
            </div>
        );
    }
};


module.exports = MessageList;
