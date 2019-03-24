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
  
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
      }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.currentUser === true) {
        this.props.history.push('/');
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
        console.log('logging in!')
        debugger;
        this.props.login(this.state).then(() => {
            if (this.state.errors === {}) {
              this.props.history.push("/")
            }
        })
    }

    handleDemoLogin(e) {
      e.preventDefault();
      this.setState({
        email: 'demo@user.com',
        password: 'booksrule'
      });
      setTimeout(() => this.props.login({
        email: 'demo@user.com',
        password: 'booksrule'
      }).then(() => {
        if (this.state.errors === {}) {
          this.props.history.push("/")
        }
    }) , 1000)
      
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
    
    render() {
      return (
        <div className="session-form-wrapper">
            <div className="session-form-background"></div>
          <form 
            onSubmit={this.handleSubmit}
            className="session-form">
              <NavLink to="/">
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
                <button>Log In</button>
                <NavLink to="/signup">
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
