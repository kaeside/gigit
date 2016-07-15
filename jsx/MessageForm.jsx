import React, { Component } from 'react';




class MessageForm extends React.Component{
    constructor() {
        super();

        this. _handleSubmit = this. _handleSubmit.bind(this);
        this. _changeHandler = this. _changeHandler.bind(this);

      this.state = {
          text: ''
          }
     }
   _changeHandler(e){
       this.setState({ text : e.target.value });
   }
   _handleSubmit(e){
       e.preventDefault();
       var message = {
           text : this.state.text
       }
       this.props.submitfnc(message);
       this.setState({ text: '' });
   }
   render() {
       return(
         <div className="messageForm">
             <form onSubmit={this._handleSubmit} >
                 <input onChange={this._changeHandler} value={this.state.text}/>
             </form>
         </div>
       );
   }
};

module.exports = MessageForm;
