import React, { Component } from 'react';
import axios from 'axios';
import passwordIcon from './img/passwordIcon.svg';
import userIcon from './img/userFormIcon.svg'
import crossIcon from './img/crossIcon.svg'
class LoginForm extends Component {
  
  state = {
    username: '',
    usernameError: '',
    password: '',
    passwordError: '',
    serverError: ''
  }

  validate = () => {
    //reset
    let hasErrors = false;
    
    this.setState({
      usernameError: '',
      passwordError: '',
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

    this.setState({serverError: ''});
    
    if(!this.validate()) {
      // Make a request for a user with a given ID
      axios.post('http://localhost:8081/signin',{
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        this.setState({serverError : 'Success!'});
      })
      .catch((error) => {
        if(error.response.status === 500 || error.response.status === 401) {
          this.setState({serverError : 'Please try again, your username or password is incorrect'});
        }
      });
    }
  }


  render() {
    return (
      <form className='adminLoginForm'>
        {this.state.serverError.length > 0 && <div> {this.state.serverError} </div>}
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