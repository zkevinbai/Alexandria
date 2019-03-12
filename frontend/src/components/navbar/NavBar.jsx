import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session/signupFormContainer';
import LoginFormContainer from '../session/loginFormContainer';
import LogoutButtonContainer from '../session/logoutButtonContainer';
import SearchBarContainer from '../search/searchBarContainer';

export default class NavBar extends Component {

  
  render() {
    const authButtons = (
      this.props.signedIn ? (
        <div>
          <div>
            <SearchBarContainer />
          </div>
          <LogoutButtonContainer/>
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
          {authButtons}
        </div>
      </nav>
    )
  }
}