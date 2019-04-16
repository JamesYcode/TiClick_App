import React from 'react';
import {Link} from 'react-router-dom';

function LoginForm(props) {
  return(
    <div className='login-form-main'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={props.handleLoginSubmit}>
        <input  id='login-email' onChange={props.handleChange} type='text' placeholder='Email' name='email' value={props.email} />
        <br/>
        <input id='login-pass' onChange={props.handleChange} type='password' placeholder='Password' name='password' value={props.password} />
        <br/>
        <input id='login-button' value='Login' type='submit' />
        <p>Don't have an account? <Link to='/register'><input id='login-register-form-button' type='submit' value='Register' /></Link></p>
      </form>
    </div>
  )
}

export default LoginForm;
