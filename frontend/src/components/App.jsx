import React, { Component } from 'react';
import LoginFormContainer from './session/loginFormContainer';
import SignupFormContainer from './session/signupFormContainer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/signup" component={SignupFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
