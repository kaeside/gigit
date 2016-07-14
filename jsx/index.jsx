import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ConversationForm from './conversation-form';
import Conversation from './conversation';
import Users from './users';

// import io from '../data/app.js'.io;

let socket = io.connect();

let reactRedux = require('react-redux');
// let Connect = reactRedux.connect;
// let Provider = reactRedux.Provider;

// let router = require('react-router');
// let Router = router.Router;
// let Route = router.Route;
// let hashHistory = router.hashHistory;
// let IndexRoute = router.IndexRoute;
// let Link = router.Link;


class GigIt extends React.Component {
constructor() {
  super();
  this. _componentDidMount = this. _componentDidMount.bind(this);
  this. _initialize = this. _initialize.bind(this);
  this. _messageRecieve = this. _messageRecieve.bind(this);
  this. _handleMessageSubmit = this. _handleMessageSubmit.bind(this);

  this.state = {
      users: [],
      messages: [],
      text: ''
      }
 }
    render() {
        return (
            <div className="container">
                <h1>GigIt</h1>
                <p>Chat with your local business and schedule appointments!</p>
                <div className='appContainer'>
                    <Users users={this.state.users} />
                    <Conversation messages={this.state.messages}/>
                    <ConversationForm
                    users={this.state.user}
                    onMessageSubmit={this.handleMessageSubmit}
                    />
                </div>
            </div>
        );
    }
    _componentDidMount() {
        socket.on('init', this.initialize);
        socket.on('send:message', this.messageRecieve);
    }

    _initialize(data) {
        let {users, name} = data;
        this.setState({users, user: name});
    }

    _messageRecieve(message) {
        let {messages} = this.state;
        messages.push(message);
        this.setState({messages});
    }

    _handleMessageSubmit(message) {
        let {messages} = this.state;
        messages.push(message);
        this.setState({messages});
        socket.emit('send:message', message);
    }
};

// mapStateToProps(state, props) {
//   return (
//       gigit: state
//       )
//   };

// let Container = connect(mapStateToProps)(GigIt);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <GigIt />, document.getElementById('app'));
});
