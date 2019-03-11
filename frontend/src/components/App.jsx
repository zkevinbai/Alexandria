import React, { Component } from 'react';
import LoginFormContainer from './session/loginFormContainer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
