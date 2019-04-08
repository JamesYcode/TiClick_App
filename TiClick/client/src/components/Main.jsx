import React from 'react';
import Login from './Login';
import { Route } from 'react-router-dom';

function Main(props) {
  const {
    handleChange,
    user_name,
    password,
  } = props;
  return(
    <div>
      <Route path='/' render={() => (
        <Login
          handleChange={handleChange}
          userName={user_name}
          password={password}
        />
      )} />
    </div>
  )
}

export default Main;
