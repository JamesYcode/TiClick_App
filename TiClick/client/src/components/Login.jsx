import React from 'react';

function Login(props) {
  const {
    handleChange,
    password,
    user_name
  } = props;
  return(
    <div>
      <form>
        <input onChange={handleChange} type='text' placeholder='Username' name='user_name' value={user_name} />

        <input onChange={handleChange} type='text' placeholder='Password' name='password' value={password} />

        <input type='submit' value='Login' />

      </form>
    </div>
  )
}

export default Login;
