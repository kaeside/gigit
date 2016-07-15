import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ConversationForm from './conversation-form';
import Conversation from './conversation';
import Users from './Users';
import Chatty from './Chatty'
// import io from '../data/app.js'.io;
// var io = require('socket.io')('httplocalhost:8080');
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

          <div className="home">
          <header className="main-header">
             <div className="container">
                <div className="header-content">
                   <a href="index.html">
                      <img src="img/site-identity.png" alt="site identity" />
                   </a>

                   <nav className="site-nav">
                      <ul className="clean-list site-links">
                         <li>
                            <a href="#">Top Local Vendors</a>
                         </li>
                         <li>
                            <a href="#">Add a Vendor</a>
                         </li>
                      </ul>

                      <a href="#" className="btn btn-outlined">Sign up</a>
                   </nav>
                </div>
             </div>
          </header>


              <div className="content-box">
                 <section className="section section-hero">
                    <div className="hero-box">
                       <div className="container">
                          <div className="hero-text align-center">
                             <h1>Make an appointment</h1>
                             <p>Chat with local businesses now!</p>
                          </div>

                          <form className="destinations-form">
                             <div className="input-line">
                                <input type="text" name="destination" value="" className="form-input check-value" placeholder="WRITE FIRST YOUR MESSAGE HERE" />
                                <button type="button" name="destination-submit" className="form-submit btn btn-special">Chat Now</button>
                             </div>
                          </form>
                       </div>
                    </div>
                  </section>
                <div className='appContainer hero-text align-center'>
                    <Users users={this.state.users} />
                    <Conversation messages={this.state.messages}/>
                    <ConversationForm
                    users={this.state.user}
                    onMessageSubmit={this._handleMessageSubmit}
                    />
                </div>
              </div>
            </div>
        );
    }
    _componentDidMount() {
        socket.on('init', this.initialize);
        socket.on('send:message', this._messageRecieve);
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
