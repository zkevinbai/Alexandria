import React, { Component } from 'react'

export default class SignupForm extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
          email: '',
          handle: '',
          password: '',
          password2: '',
          errors: {},

      }
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
        <form>
            <input 
                type="text" 
                value={this.state.email}
                onChange />
            <input 
                type="text" 
                value={this.state.handle} />
            <input 
                type="password" 
                value={this.state.password} />
            <input 
                type="password" 
                value={this.state.password2} />
        </form>
      </div>
    )
  }
}
