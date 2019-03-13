import React, { Component } from 'react';
import './session.css';
import '../navbar/navBar.css'

export default class LogoutButton extends Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.replace("/");
  }

  render() {
    return (
      <div className="logout-button">
          <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}


