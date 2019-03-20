import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import LogoutButtonContainer from '../session/logoutButtonContainer';
import SearchBarContainer from '../search/searchBarContainer';
import './navBar.css';
class NavBar extends Component {

  
  render() {
    const authButtons = (
      this.props.session.isAuthenticated ? (
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
          <div id="site-title" >
            <img src="./Great_Library.png" />
            <a href="/"><h3>Alexandria</h3></a>
          </div>
          <div className='nav-buttons'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
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

export default withRouter(NavBar)