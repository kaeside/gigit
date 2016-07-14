import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div className="users">
                <h1>Online Users</h1>
                <ul>
                    {this.props.users.map((user,i) => {
                        return (
                            //STORES LIST OF USERS. EACH LI IS A USER
                            <li key={i}>{user}</li>
                        );
                    }
                )}
                </ul>
            </div>
        );
    }
}

module.exports = Users;
