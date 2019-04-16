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
    <div className='catagory-list'>
      {props.categoriesList.map((list) => (
        <div id='category-list-map' key={list.id}>
          <p>{list.title}</p>
        <input id='category-list-create' type='submit' value='Create Item' onClick={() => {
          setCategoryId(list.id)
        }} />
        <br/>
        <input id='category-list-delete' type='submit' value='Delete Category' onClick={() => destroyCategory(list.user_id, list.id)} />
        <br/>
        <input id='category-list-edit' type='submit' value='Edit Category' onClick={() => setCategoryFormData(list)} />
        <br/>
        </div>
      ))}
    </div>
  )
}

export default CategoriesList;
