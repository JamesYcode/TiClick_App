import React from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './Users';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import CategoryForm from './forms/CategoryForm';
import CategoriesList from './CategoriesList';
import ItemForm from './forms/ItemForm';
import ItemsList from './ItemsList';
import EditCategoryForm from './forms/EditCategoryForm';

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
    itemsList,
    currentUser,
    userItem,
    setCategoryId,
    getAllItems,
    destroyCategory,
    setCategoryFormData,
    editCategorySubmit,
    handleEditChange,
    selectedCategories
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

      <div className='nav'>
        {currentUser.id && <nav className='main-nav'>
          {currentUser.id && <Link id='create-inventory' to='/users/create/new/inventory'>Create Inventory</Link>}
          {currentUser.id && <button id='item-list' onClick={() => {
            getAllItems(currentUser.id, userItem.category_id)
          }}><Link id='item-list-link' to='/users/items'>List of items</Link></button>}
        </nav>}

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
            destroyCategory={destroyCategory}
            setCategoryFormData={setCategoryFormData}
            editCategorySubmit={editCategorySubmit}
          />
        )} />

        <div className='category-form'>
          <Route exact path='/users/create/new/inventory' render={() => (
            <CategoryForm
              handleChange={handleChange}
              handlePostCategory={handlePostCategory}
              title={title}
            />
          )} />
          <Route exact path = '/users/create/new/inventory' render={() => (
            <EditCategoryForm
              editCategorySubmit={editCategorySubmit}
              handleEditChange={handleEditChange}
              handleChange={handleChange}
              title={selectedCategories.title}
            />
          )} />
        </div>
        <Route exact path='/users/create/inventory/items' render={(props) => (
          <ItemForm
            handleItemChange={handleItemChange}
            handlePostItem={handlePostItem}
            userItem={userItem}
          />
        )} />
      </div>

      <Route exact path='/users/items' render={() => (
        <ItemsList
          items={items}
          currentUser={currentUser}
          itemsList={itemsList}
        />
      )} />
    </div>
  )
}

export default Main;
