import React from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './Users';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import CategoryForm from './forms/CategoryForm';
import CategoriesList from './CategoriesList';

function Main(props) {
  const {
    handleChange,
    handleRegister,
    handleLoginSubmit,
    handlePostCategory,
    username,
    password,
    users,
    name,
    email,
    items,
    title,
    categoriesList,
    currentUser
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
          handleRegister={handleRegister}
          name={name}
          username={username}
          password={password}
          email={email}
         />
      )} />

      <Route exact path='/categories' render={(props) => (
        <CategoryForm
          handleChange={handleChange}
          handlePostCategory={handlePostCategory}
          title={title}
        />
      )} />

      <Link to='/categories/list'>Category List</Link>
      <Route path='/categories/list' render={(props) => (
        <CategoriesList
          categoriesList={categoriesList}
          currentUser={currentUser}
        />
      )} />
    </div>
  )
}

export default Main;
