import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ConversationForm from './jsx/conversation-form';

let reactRedux = require('react-redux');
let Connect = reactRedux.connect;
let Provider = reactRedux.Provider;

let router = require('react-router');
let Router = router.Router;
let Route = router.Route;
let hashHistory = router.hashHistory;
let IndexRoute = router.IndexRoute;
let Link = router.Link;

class GigIt extends Component{
  render () {
      return (
          <div className="container">
              <h1>
              GigIt
              </h1>
              <p>
              Chat with your local business and schedule appointments!
              </p>
              <div className='appContainer'>
                  <Users />
                  <Conversation />
                  <ConversationForm />
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

let routes = (
    <Router history={hashHistory}>
      <Route path="/" component={GigIt}>
        <IndexRoute component={ConversationForm} />

        {/*TODO: FIX THIS*/}
        <Route path="/confirmationpage" component={ConfirmationPage} />
        <Route path="/confirmed" component={Confirmed} />
      </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <GigItChat/>, document.getElementById('app')
    );
});
