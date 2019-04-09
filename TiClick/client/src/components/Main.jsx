import React from 'react';
import Login from './Login';
import { Link, Route } from 'react-router-dom';
import Users from './Users';
import RegisterForm from './RegisterForm';

function Main(props) {
  const {
    handleChange,
    handleSubmit,
    username,
    password,
    users,
    name,
    email
  } = props;
  return(
    <div>


      <Link to='/users'>Get all Users</Link>
      <Route path='/users' render={(props) => (
        <Users
          users={users}
        />
      )} />
      <RegisterForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={name}
        username={username}
        password={password}
        email={email}
       />
    </div>
  )
}

export default Main;
