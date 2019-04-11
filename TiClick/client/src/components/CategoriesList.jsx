import React from 'react';
import CategoryForm from './forms/CategoryForm';
import { Link, Route } from 'react-router-dom';

function CategoriesList(props) {
  const {
    handleChange,
    handlePostCategory,
    title,
    handleSelectCategory,
    handleSubmitCategory,
    setCategoryId,
    currentUser
  } = props
  return(
    <div>
      {props.categoriesList.map((list) => (
        <div key={list.id}>
        { list.user_id == currentUser.id && <p>{list.title}</p>}
        {list.user_id == currentUser.id && <input type='submit' value='create item' onClick={() => {
          setCategoryId(list.id)
        }} />}
        </div>
      ))}


      <Route exact path='/users/create/new/inventory' render={() => (
        <CategoryForm
          handleChange={handleChange}
          handlePostCategory={handlePostCategory}
          title={title}
        />
      )} />
    </div>
  )
}

export default CategoriesList;
