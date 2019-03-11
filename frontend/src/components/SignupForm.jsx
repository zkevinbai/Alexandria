import React, { Component } from 'react'

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

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.renderErrors = this.renderErrors.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
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
                type="text" 
                value={this.state.handle}
                onChange={this.handleChange('handle')}
                placeholder="Email" />
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
            <button>Sign Up</button>
        </form>
      </div>
    )
  }
}
