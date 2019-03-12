import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';

// App
  // navBarContainer
  // MainPage

// Auth Related
  import SignupFormContainer from './session/signupFormContainer';
  import LoginFormContainer from './session/loginFormContainer';
  import LogoutButtonContainer from './session/logoutButtonContainer';

// Book Related
  import BooksIndexContainer from './books/booksIndexContainer';

// Search Related
  import SearchBarContainer from './search/searchBarContainer';

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
        <Route path="/" component={SearchBarContainer} />
        <Route path="/shelf/:userId" component={BooksIndexContainer} />
      </div>
    );
  }
}

export default App;
