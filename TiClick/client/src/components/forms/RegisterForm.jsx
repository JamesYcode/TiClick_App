import React from 'react';

function RegisterForm(props) {
  return(
    <div className='register-form'>
      <form onSubmit={props.handleRegister}>
        <input id='register-name-form' onChange={props.handleChange} type='text' placeholder='Name' name='name' value={props.name} />
        <br/>
        <input id='register-email-form' onChange={props.handleChange} type='text' placeholder='Email' name='email' value={props.email} />
        <br/>
        <input id='register-pass-form' onChange={props.handleChange} type='password' placeholder='Password' name='password' value={props.password} />
        <br/>
        <input id='register-username-form' onChange={props.handleChange} type='text' placeholder='User Name' name='username' value={props.username} />
        <br/>
        <input id='register-button-form' value='Submit' type='submit' />
      </form>
    </div>
  )
}

export default RegisterForm;
