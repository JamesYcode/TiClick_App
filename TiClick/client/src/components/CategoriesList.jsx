import React from 'react';
import CategoryForm from './forms/CategoryForm';
import EditCategoryForm from './forms/EditCategoryForm';
import { Link, Route } from 'react-router-dom';

function CategoriesList(props) {
  const {
    handleChange,
    handlePostCategory,
    title,
    handleSelectCategory,
    handleSubmitCategory,
    setCategoryId,
    currentUser,
    destroyCategory,
    categoriesList,
    setCategoryFormData,
    editCategorySubmit
  } = props
  return(
    <div>
      {props.categoriesList.map((list) => (
        <div key={list.id}>
          <p>{list.title}</p>
        <input type='submit' value='Create Item' onClick={() => {
          setCategoryId(list.id)
        }} />
        <input type='submit' value='Delete Category' onClick={() => destroyCategory(list.user_id, list.id)} />
        <input type='submit' value='Edit Category' onClick={() => setCategoryFormData(list)} />
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
