import React, { Component } from 'react'

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
        this.props.login(this.state)
        this.props.history.push("/")
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
        <div>
          <form onSubmit={this.handleSubmit}>
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
              <button>Log In</button>
              {this.renderErrors()}
          </form>
        </div>
      )
    }
}
