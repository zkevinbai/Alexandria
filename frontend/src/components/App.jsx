import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';

// App
  import Splash from './splash';
  import NavBarContainer from './navbar/navBarContainer';
  // navBarContainer
  // MainPage

// Auth Related
  import SignupFormContainer from './session/signupFormContainer';
  import LoginFormContainer from './session/loginFormContainer';

// Book Related
  import BooksIndexContainer from './books/booksIndexContainer';
  import BookShowContainer from './books/bookShowContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        < NavBarContainer />
        <Switch>
          <AuthRoute exact path="/" component={Splash} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
          <Route path="/shelf/:userId" component={BooksIndexContainer} />
          <Route path={"/books/:bookId"} component={BookShowContainer} />
      </div>
    );
  }
}

export default App;
