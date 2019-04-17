import React from 'react';
import { Route } from 'react-router-dom';
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
    name,
    email,
    title,
    categoriesList,
    itemsList,
    currentUser,
    userItem,
    setCategoryId,
    destroyCategory,
    setCategoryFormData,
    editCategorySubmit,
    handleEditChange,
    selectedCategories,
    getAllItems
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


      <div className='main-content'>
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
            getAllItems={getAllItems}
          />
        )} />


        <Route exact path='/users/create/inventory/items' render={(props) => (
          <ItemForm
            handleItemChange={handleItemChange}
            handlePostItem={handlePostItem}
            userItem={userItem}
          />
        )} />



          <Route exact path='/users/create/new/inventory' render={() => (
            <div className='category-form'>
              <CategoryForm
                handleChange={handleChange}
                handlePostCategory={handlePostCategory}
                title={title}
              />
              <EditCategoryForm
                editCategorySubmit={editCategorySubmit}
                handleEditChange={handleEditChange}
                handleChange={handleChange}
                title={selectedCategories.title}
              />
            </div>
          )} />

          <Route path='/users/view/items' render={() => (
            <ItemsList
              itemsList={itemsList}
            />
          )} />
      </div>
    </div>
  )
}

export default Main;
