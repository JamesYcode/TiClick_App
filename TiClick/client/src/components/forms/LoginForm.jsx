import React from 'react';

function LoginForm(props) {
  return(
    <div>
      <form onSubmit={props.handleLoginSubmit}>
        <input onChange={props.handleChange} type='text' placeholder='Email' name='email' value={props.email} />
        <input onChange={props.handleChange} type='text' placeholder='Password' name='password' value={props.password} />
        <input value='Login' type='submit' />
      </form>
    </div>
  )
}

export default LoginForm;
