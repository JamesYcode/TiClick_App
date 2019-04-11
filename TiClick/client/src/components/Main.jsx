import React from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './Users';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import CategoryForm from './forms/CategoryForm';
import CategoriesList from './CategoriesList';
import ItemForm from './forms/ItemForm';

function Main(props) {
  const {
    handleChange,
    handleRegister,
    handleLoginSubmit,
    handlePostCategory,
    handlePostItem,
    handleItemChange,
    handleSelectCategory,
    handleSubmitCategory,
    username,
    password,
    users,
    name,
    email,
    items,
    title,
    categoriesList,
    currentUser,
    userItem,
    setCategoryId
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

      <Route exact path='/register' render={(props) => (
        <RegisterForm
          handleChange={handleChange}
          handleRegister={handleRegister}
          name={name}
          username={username}
          password={password}
          email={email}
         />
      )} />

      <Route exact path='/users/create/inventory/items' render={(props) => (
        <ItemForm
          handleItemChange={handleItemChange}
          handlePostItem={handlePostItem}
          userItem={userItem}
        />
      )} />



      <Link to='/users/create/new/inventory'>Create Inventory</Link>
      <Route exact path='/users/create/new/inventory' render={(props) => (
        <CategoriesList
          categoriesList={categoriesList}
          currentUser={currentUser}
          handleChange={handleChange}
          handleSelectCategory={handleSelectCategory}
          handleSubmitCategory={handleSubmitCategory}
          handlePostCategory={handlePostCategory}
          title={title}
          setCategoryId={setCategoryId}
        />
      )} />
    </div>
  )
}

export default Main;
