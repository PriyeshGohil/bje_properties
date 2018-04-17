import React, { Component } from 'react';
import passwordIcon from './img/passwordIcon.svg';
import userIcon from './img/userFormIcon.svg'
import crossIcon from './img/crossIcon.svg'
class LoginForm extends Component {
  
  state = {
    username: '',
    usernameError: '',
    password: '',
    passwordError: ''
  }

  validate = () => {
    //reset
    let hasErrors = false;
    
    this.setState({
      usernameError: '',
      passwordError: ''
    });

    if(this.state.username.length === 0) {
      hasErrors = true;
      this.setState({usernameError: 'please enter a valid username'});
    }

    if(this.state.password.length === 0) {
      hasErrors = true;
      this.setState({passwordError: 'please enter a valid password'});
    }

    return hasErrors;
  }
    
  submit = e => {
    e.preventDefault();
    
    if(!this.validate()) {
      console.log(this.state);
    }
  }


  render() {
    return (
      <form className='adminLoginForm'>
        <div className='textInput'>
        <div className='textInput__logo'><img width='25' height='25' src={userIcon} alt='Enter your user name'/></div>
        <input name='username' placeholder='Username' value={this.state.username} onChange={e => this.setState({username: e.target.value.trim()})}/>
        {this.state.usernameError.length > 0 && <div className='formError'><img src={crossIcon} alt='error icon' /></div>}
        </div>
         
        <div className='textInput'>
          <div className='textInput__logo'><img width='25' height='25' src={passwordIcon} alt='Enter your password'/></div>
          <input placeholder='Password' type='password' value={this.state.password} onChange={e => this.setState({password: e.target.value.trim()})}/>
          {this.state.passwordError.length > 0 && <div className='formError'><img src={crossIcon} alt='error icon' /></div>}
        </div>        
        <button onClick={e => this.submit(e)} className='loginBtn'>Log In</button>
      </form>
    )
  }
} 

export default LoginForm;