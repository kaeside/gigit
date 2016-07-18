'use strict';

import React, {Component} from 'react';

var socket = io.connect();
class UsersList extends Component {
    render() {
        return (
            <div className='users'>
                <h3>
                    Online Users
                </h3>
                <ul>
                    {this.props.users.map((user, i) => {
                        return (
                            <li key={i}>
                                {user}
                            </li>
                        );
                    })
}
                </ul>
            </div>
        );
    }
};

class Message extends Component {
    render() {
        return (
            <div className="message">
                <strong>{this.props.user}
                    :</strong>
                <span>{this.props.text}</span>
            </div>
        );
    }
};

class MessageList extends Component {
    render() {
        return (
            <div className='messages'>
                <h2>
                    Chat:
                </h2>
                {this.props.messages.map((message, i) => {
                    return (<Message key={i} user={message.user} text={message.text}/>);
                })
}
            </div>
        );
    }
};

class MessageForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            text: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        var message = {
            user: this.props.user,
            text: this.state.text
        }
        this.props.onMessageSubmit(message);
        this.setState({text: ''});
    }

    changeHandler(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div className='message_form'>
                <h3>Write New Message</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.changeHandler} value={this.state.text}/>
                </form>
            </div>
        );
    }
};

class ChangeNameForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onKey = this.onKey.bind(this);
        this.state = {
            newName: ''
        };
    }

    onKey(event) {
        this.setState({newName: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var newName = this.state.newName;
        this.props.onChangeName(newName);
        this.setState({newName: ''});
    }

    render() {
        return (
            <div className='change_name_form'>
                <h3>
                    Change Name
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onKey} value={this.state.newName}/>
                </form>
            </div>
        );
    }
};

class ChatApp extends Component {
    constructor() {
        super();
        this._initialize = this._initialize.bind(this);
        this._messageRecieve = this._messageRecieve.bind(this);
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.state = {
            users: [],
            messages: [],
            text: ''
        };
    }

    componentDidMount() {
        socket.on('init', this._initialize);
        socket.on('send:message', this._messageRecieve);
        socket.on('change:name', this._userChangedName);
    }

    _initialize(data) {
        var {users, name} = data;
        this.setState({users, user: name});
    }

    _messageRecieve(message) {
        var {messages} = this.state;
        messages.push(message);
        this.setState({messages});
    }

    handleMessageSubmit(message) {
        var {messages} = this.state;
        messages.push(message);
        this.setState({messages});
        socket.emit('send:message', message);
    }

    handleChangeName(newName) {
        var oldName = this.state.user;
        socket.emit('change:name', {
            name: newName
        }, (result) => {
            if (!result) {
                return alert('Unable to change your name');
            }
            var {users} = this.state;
            var index = users.indexOf(oldName);
            users.splice(index, 1, newName);
            this.setState({users, user: newName});
        });
    }

    render() {
        return (
            <div>
                <UsersList users={this.state.users}/>
                <MessageList messages={this.state.messages}/>
                <MessageForm onMessageSubmit={this.handleMessageSubmit} user={this.state.user}/>
                <ChangeNameForm onChangeName={this.handleChangeName}/>
            </div>
        );
    }
};

React.render(<ChatApp/>, document.getElementById('app'));
