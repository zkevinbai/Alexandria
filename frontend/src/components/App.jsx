import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import './app.css'

// App
  import Splash from './splash';
  import NavBarContainer from './navbar/navBarContainer';

// Auth Related
  import SignupFormContainer from './session/signupFormContainer';
  import LoginFormContainer from './session/loginFormContainer';

// Book Related
  import BooksIndexContainer from './books/booksIndexContainer';
  import BookPublicShowContainer from './books/bookshow/bookPublicShowContainer';
  import BookUserNewShowContainer from './books/bookshow/bookUserNewShowContainer';
  import BookUserShowContainer from './books/bookshow/bookUserShowContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBarContainer />
          <AuthRoute path="/" component={Splash} />
        <AuthRoute path="/book/:bookId" component={BookPublicShowContainer} />
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
          <Route path="/shelf/:userId" component={BooksIndexContainer} />
          <Route path="/shelf/:userId/userBook/:bookId" component={BookUserNewShowContainer} />
          <Route path="/shelf/:userId/newBook/:bookId" component={BookUserShowContainer} />
      </div>
    );
  }
}

export default App;
