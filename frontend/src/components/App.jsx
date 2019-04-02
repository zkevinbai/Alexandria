import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/routeUtil';
import './app.css'

// App
  import Splash from './splash';
  import NavBarContainer from './navbar/navBarContainer';

// Auth Related
  import SignupFormContainer from './session/signupFormContainer';
  import LoginFormContainer from './session/loginFormContainer';
  
// Book Related
  import BooksIndexContainer from './books/booksIndexContainer';
  import BookShowContainer from './books/bookShowContainer';
  import BookPublicShowContainer from './books/bookshow/bookPublicShowContainer';
  
class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" component={NavBarContainer} />
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
          <AuthRoute path="/" component={Splash} />
          <AuthRoute path="/book/:volumeId" component={BookPublicShowContainer} />
          <Route path="/shelf/:userId" component={BooksIndexContainer} />
          <Route path="/books/:bookId" component={BookShowContainer} />
          <Route path="/shelf/:userId/book/:bookId" component={BookShowContainer} />
      </div>
    );
  }
}

export default App;
