import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session/signupFormContainer';
import LoginFormContainer from '../session/loginFormContainer';
import LogoutButtonContainer from '../session/logoutButtonContainer';
import SearchBarContainer from '../search/searchBarContainer';
import { Route } from 'react-router-dom';

export default class Splash extends Component {

  
  render() {
    const authButtons = (
      this.props.signedIn ? (
        <div>
          <Link to='/' component={LogoutButtonContainer}>
            Logout 
          </Link>
        </div>
      ) : (
        <div>
          <Link to='/login' component={LoginFormContainer}>
            Login
          </Link>
          <Link to='/signup' component={SignupFormContainer}>
            Sign Up
          </Link>
        </div>
      )
    )
    return (
      <nav>
        <div>
          <SearchBarContainer/>
        </div>
        <div>
          {authButtons}
        </div>
      </nav>
    )
  }
}