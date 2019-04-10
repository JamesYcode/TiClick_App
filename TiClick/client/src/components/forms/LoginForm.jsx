import React from 'react';
import {Link} from 'react-router-dom';

function LoginForm(props) {
  return(
    <div>
      <form onSubmit={props.handleLoginSubmit}>
        <input onChange={props.handleChange} type='text' placeholder='Email' name='email' value={props.email} />
        <input onChange={props.handleChange} type='text' placeholder='Password' name='password' value={props.password} />
        <input value='Login' type='submit' />
        <p>Don't have an account? <Link to='/register'><input type='submit' value='Register' /></Link></p>
      </form>
    </div>
  )
}

export default LoginForm;
