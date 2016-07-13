import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ConversationForm from './jsx/conversation-form.jsx';
let socket = require('socket.io');

let reactRedux = require('react-redux');
let Connect = reactRedux.connect;
let Provider = reactRedux.Provider;

let router = require('react-router');
let Router = router.Router;
let Route = router.Route;
let hashHistory = router.hashHistory;
let IndexRoute = router.IndexRoute;
let Link = router.Link;

class GigIt extends Component {
    getInitialState() {
        return ({
            users: [],
            messages: [],
            text: ''
            });
    }

    componentDidMount() {
        socket.on('init', this.initialize);
        socket.on('send:message', this.messageRecieve);
    }

    initialize(data) {
        let {users, name} = data;
        this.setState({users, user: name});
    }

    messageRecieve(message) {
        let {messages} = this.state;
        messages.push(message);
        this.setState({messages});
    }

    handleMessageSubmit(message) {
        let {messages} = this.state;
        messages.push(message);
        this.setState({messages});
        socket.emit('send:message', message);
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
};

// mapStateToProps(state, props) {
//   return (
//       gigit: state
//       )
//   };

// let Container = connect(mapStateToProps)(GigIt);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <GigItChat/>, document.getElementById('app'));
});
