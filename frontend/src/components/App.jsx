import React, { Component } from 'react';
import LoginFormContainer from './session/loginFormContainer';
import SignupFormContainer from './session/signupFormContainer';
import { Switch, Route } from 'react-router-dom';
import LogoutButtonContainer from './session/logoutButtonContainer';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProtectedRoute path="/" component={LogoutButtonContainer} />
        <Switch>
          <Route exact path="/" render={() => <h1>It worked!</h1>} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
