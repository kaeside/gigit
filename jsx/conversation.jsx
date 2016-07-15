import React, { Component } from 'react';
import Message from './Message.jsx';

class Conversation extends Component {
    render() {
        return(
            <div className="conversation">
                <h1>Chat: </h1>
                {
                    this.props.messages.map((messages,i) => {
                        return (
                            <Message
                                key={i}
                                user={message.user}
                                text={message.text}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

module.exports = Conversation;
