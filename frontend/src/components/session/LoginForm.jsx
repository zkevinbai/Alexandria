import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './session.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
      document.body.className = 'modal-open';
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
      }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.currentUser === true) {
        this.props.history.replace('/');
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
        this.props.login(this.state).then(() => {
          if (Object.keys(this.state.errors).length === 0) {
              document.body.className = "";
              this.props.history.replace("/")
            }
        })
    }

    handleDemoLogin(e) {
      e.preventDefault();
      this.setState({
        email: 'demo@user.com',
        password: 'booksrule', 
        errors: {}
      });
      this.props.login({
        email: 'demo@user.com',
        password: 'booksrule'
      }).then(() => {
        if (Object.keys(this.state.errors).length === 0) {
          document.body.className = "";
          this.props.history.replace("/")
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

    resetScroll(){
      document.body.className = "";
    }
    
    render() {
      return (
        <div className="session-form-wrapper">
            <div className="session-form-background"></div>
          <form 
            onSubmit={this.handleSubmit}
            className="session-form">
              <NavLink to="/" onClick={this.resetScroll} >
                <i className="fas fa-window-close"></i>
              </NavLink>
              <h1>Log In</h1>
              <input 
                  type="text" 
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  placeholder="Email" />
              <input 
                  type="password" 
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  placeholder="Password" />
              <div className="session-form-buttons">
                <button onClick={this.handleSubmit}>Log In</button>
                <NavLink to="/signup" onClick={this.resetScroll}>
                    <button>Not a user? Sign up instead!</button>
                </NavLink>
                <button onClick={this.handleDemoLogin}>Demo Login</button>
              </div>
              {this.renderErrors()}
          </form>
        </div>
      )
    }
}
