import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './session.css'


export default class SignupForm extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
          email: '',
          handle: '',
          password: '',
          password2: '',
          errors: {}
      }
    document.body.className += ' modal-open';
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.renderErrors = this.renderErrors.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.login(this.state)
    }

    this.setState({
        errors: nextProps.errors
    })
  }

  handleChange(field) {
      return e => this.setState({
          [field]: e.currentTarget.value
      })
  }

  handleSubmit(e) {
      e.preventDefault();
      this.props.signup(this.state)
        // .then(() => this.props.login(this.state))
        .then(() => {
          if (Object.keys(this.state.errors).length === 0) {
            // this.props.history.push("/")
            document.body.className = "";
          }
      })
  }

  renderErrors() {
      return(
          <ul>
              {Object.keys(this.state.errors).map((error, i) => (
                  <li key={i}>
                    {this.state.errors[error]}
                  </li>
              ))}
          </ul>
      )
  }

  resetScroll() {
    document.body.className = "";
  }
  
  render() {
    
    return (
      <div className="session-form-wrapper">
        <div className="session-form-background"></div>
        <form
            className="session-form" 
            onSubmit={this.handleSubmit}>
          <NavLink to="/" onClick={this.resetScroll}>
              <i className="fas fa-window-close"></i>
            </NavLink>
            <h1>Sign Up</h1>
            <input 
                type="text" 
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder="Email" />
            <input 
                type="text" 
                value={this.state.handle}
                onChange={this.handleChange('handle')}
                placeholder="Username" />
            <input 
                type="password" 
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder="Password" />
            <input 
                type="password" 
                value={this.state.password2}
                onChange={this.handleChange('password2')}
                placeholder="Confirm Password" />
            <div className="session-form-buttons">
                <button>Sign Up</button>
                <NavLink to="/login">
                    <button>Already a user? Log in instead!</button>
                </NavLink>
              </div>
            {this.renderErrors()}
        </form>
      </div>
    )
  }
}
