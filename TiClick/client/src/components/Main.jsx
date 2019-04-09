import React from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './Users';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';

function Main(props) {
  const {
    handleChange,
    handleSubmit,
    handleLoginSubmit,
    username,
    password,
    users,
    name,
    email
  } = props;

  return(
    <div>
      <Route exact path='/' render={(props) => (
        <LoginForm
          handleChange={handleChange}
          handleLoginSubmit={handleLoginSubmit}
          password={password}
          email={email}
          value='Login'
         />
      )} />

      <Route path='/register' render={(props) => (
        <RegisterForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          name={name}
          username={username}
          password={password}
          email={email}
         />
      )} />


      <Link to='/users'>Get all Users</Link>
      <Route path='/users' render={(props) => (
        <Users
          users={users}
        />
      )} />
    </div>
  )
}

export default Main;
