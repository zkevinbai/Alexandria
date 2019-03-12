import React, { Component } from 'react'

export default class LogoutButton extends Component {

  handleLogout() {
    this.props.logout()
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
          <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    )
  }
}
