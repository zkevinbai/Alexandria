import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

          <div>
            <LogoutButtonContainer />
          </div>

        </div>
      ) : (
        <div className="nav-content">
          <div id="site-title" >
            <img src="./Great_Library.png" />
            <a href="/"><h3>Alexandria</h3></a>
          </div>
          <div className='login-signup-buttons'>
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