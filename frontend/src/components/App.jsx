import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import NavBarContainer from './navbar/navBarContainer';

// App
  import Splash from './splash';
  // navBarContainer
  // MainPage

// Auth Related
  import SignupFormContainer from './session/signupFormContainer';
  import LoginFormContainer from './session/loginFormContainer';
  import LogoutButtonContainer from './session/logoutButtonContainer';
  

// Book Related
  import BooksIndexContainer from './books/booksIndexContainer';

// Search Related
  // searchBar

class App extends Component {
  render() {
    return (
      <div className="App">
        < NavBarContainer />
        <Switch>
          <Route exact path="/" component={Splash} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
        <Route path="/" component={BooksIndexContainer} />
      </div>
    );
  }
}

export default App;
