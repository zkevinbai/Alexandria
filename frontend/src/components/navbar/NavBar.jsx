import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SignupFormContainer from '../session/signupFormContainer';
import LoginFormContainer from '../session/loginFormContainer';
import LogoutButtonContainer from '../session/logoutButtonContainer';
import SearchBarContainer from '../search/searchBarContainer';
import './navBar.css';
export default class NavBar extends Component {

  
  render() {
    const authButtons = (
      this.props.signedIn ? (
        <div className="nav-content">
          <div className="nav-search-bar">
            <SearchBarContainer />
          </div>

          <div className='logout-button'>
            <LogoutButtonContainer />
          </div>

        </div>
      ) : (
        <div className="nav-content">
          <h3 id="site-title">Alexandria</h3>
          <div>
            <Link to='/login' component={LoginFormContainer}>Login</Link>
            <Link to='/signup' component={SignupFormContainer}>Sign Up</Link>
          </div>
        </div>
      )
    )
    return (
      <nav className="navbar">
          {authButtons}
      </nav>
    )
  }
}