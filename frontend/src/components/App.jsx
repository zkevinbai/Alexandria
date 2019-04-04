import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import RecShowContainer from './recommendations/recShowContainer';
import './app.css'

// App
  import Splash from './splash';
  import NavBarContainer from './navbar/navBarContainer';

// Auth Related
  import SignupFormContainer from './session/signupFormContainer';
  import LoginFormContainer from './session/loginFormContainer';
  
// Book Related
  import BooksIndexContainer from './books/booksIndexContainer';
  import BookPublicShowContainer from './books/bookShowModal/bookPublicShowContainer';
  import BookShowModalContainerUserLibrary from './books/bookShowModal/bookShowModalContainerUserLibrary';
  import BookShowModalContainerUserNew from './books/bookShowModal/bookShowModalContainerUserNew';
  
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
          <ProtectedRoute path="/shelf/:userId" component={BooksIndexContainer} />
          <AuthRoute path="/" component={Splash} />
        </Switch>
          <ProtectedRoute path="/shelf/:userId/bookrec/:recId" component={RecShowContainer} />
          <ProtectedRoute path="/shelf/:userId/books/:bookId" component={BookShowModalContainerUserLibrary} />
          <ProtectedRoute path="/shelf/:userId/book/:volumeId" component={BookShowModalContainerUserNew} />
          <ProtectedRoute path="/book/:volumeId" component={BookPublicShowContainer} />
      </div>
    );
  }
}

export default App;
