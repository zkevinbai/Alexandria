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
  import BookPublicShowContainer from './books/bookShowModal/bookPublicShowContainer';
  import BookUserNewShowContainer from './books/bookShowModal/bookUserNewShowContainer';
  
class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" component={NavBarContainer} />
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
        <Switch>
          <Route path="/books/:bookId" component={BookShowContainer} />
          <Route path="/shelf/:userId" component={BooksIndexContainer} />
          <AuthRoute path="/" component={Splash} />
        </Switch>
          <AuthRoute path="/book/:volumeId" component={BookPublicShowContainer} />
          <Route path="/shelf/:userId/book/:volumeId" component={BookUserNewShowContainer} />
      </div>
    );
  }
}

export default App;
