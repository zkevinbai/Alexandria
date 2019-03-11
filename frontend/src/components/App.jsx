import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// App
  // navBarContainer
  // MainPage

// Auth Related
import LoginFormContainer from './session/loginFormContainer';
  // SignupFormContainer

// Book Related
  // bookIndex

// Search Related
  // searchBar

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
