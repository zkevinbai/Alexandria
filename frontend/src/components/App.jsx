import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';

// App
  import Splash from './splash';
  // navBarContainer
  // MainPage

// Auth Related
  import SignupFormContainer from './session/signupFormContainer';
  import LoginFormContainer from './session/loginFormContainer';
  import LogoutButtonContainer from './session/logoutButtonContainer';
  

// Book Related
  // bookIndex

// Search Related
  // searchBar

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProtectedRoute path="/" component={LogoutButtonContainer} />
        <Switch>
          <Route exact path="/" component={Splash} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
