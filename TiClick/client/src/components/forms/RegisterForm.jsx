import React from 'react';

function RegisterForm(props) {
  return(
    <div>
      <form onSubmit={props.handleRegister}>
        <input onChange={props.handleChange} type='text' placeholder='Name' name='name' value={props.name} />
        <input onChange={props.handleChange} type='text' placeholder='Email' name='email' value={props.email} />
        <input onChange={props.handleChange} type='text' placeholder='Password' name='password' value={props.password} />
        <input onChange={props.handleChange} type='text' placeholder='User Name' name='username' value={props.username} />
        <input value='Submit' type='submit' />
      </form>
    </div>
  )
}

export default RegisterForm;
