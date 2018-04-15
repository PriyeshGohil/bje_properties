import React, { Component } from 'react';
import passwordIcon from './img/passwordIcon.svg';
import userIcon from './img/userFormIcon.svg'
class LoginForm extends Component {
  
  state = {
    email: '',
    password: ''
  }


  render() {
    return (
      <form className='adminLoginForm'>
        <div className='textInput'>
        <div className='textInput__logo'><img width='25' height='25' src={userIcon} alt='Enter your user name'/></div>
        <input value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
        </div>
         
        <div className='textInput'>
          <div className='textInput__logo'><img width='25' height='25' src={passwordIcon} alt='Enter your password'/></div>
          <input type='password' value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
        </div>
        
        <br/>
        
        <button className='loginBtn'>Log In</button>
      </form>
    )
  }
} 

export default LoginForm;