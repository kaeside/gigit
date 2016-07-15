import React, { Component } from 'react';


class ConversationForm extends React.Component{
    constructor() {
        super();

        this. _handleOnSubmit = this. _handleOnSubmit.bind(this);
        this. _changeHandler = this. _changeHandler.bind(this);

      this.state = {
          text: ''
          }
     }


    render() {
        return(
            <div className='conversation_form'>
            <h3>Write New Message</h3>
            <form onSubmit={this._handleOnSubmit}>
                <input
                    onChange={this._changeHandler}
                    value={this.state.text}
                />
            <button onClick={this._handleOnSubmit}></button>
            </form>
            </div>
        );
    }
    _handleOnSubmit(event) {
        event.preventDefault();
        let message = {
            user : this.props.user,
            text : this.state.text
        }
        console.log('the log before onMessageSubmit(message) works?...');

        this.props.onMessageSubmit(message);
        console.log('logggin it out....');
        this.setState({
            text: ''
        });
    }

    _changeHandler(event) {
        this.setState({
            text : event.target.value
        });
    }

};

module.exports = ConversationForm;
