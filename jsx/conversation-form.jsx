import React, { Component } from 'react';

class ConversationForm extends Component{
    getInitialState() {
        return (
            text: ''
        );
    }

    handleOnSubmit(event) {
        event.preventDefault();
        let message = {
            user : this.props.user,
            text : this.state.text
        }
        this.props.onMessageSubmit(message);
        this.setState({
            text: ''
        });
    }

    changeHandler(event) {
        this.setState({
            text : event.target.value
        });
    }

    render() {
        return(
            <div className='conversation_form'>
            <h3>Write New Message</h3>
            <form onSubmit={this.handleOnSubmit}>
                <input
                    onChange={this.changeHandler}
                    value={this.state.text}
                />
            </form>
            </div>
        );
    }
};

module.exports = ConversationForm;
