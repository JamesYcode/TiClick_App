import React from 'react';

function CategoriesList(props) {
  const {
    setCategoryId,
    destroyCategory,
    setCategoryFormData,
    getAllItems
  } = props
  return(
    <div className='catagory-list'>
      {props.categoriesList.map((list) => (
        <div id='category-list-map' key={list.id}>
          <p id='catagory-title'>{list.title}</p>
        <input id='category-list-create' type='submit' value='Create Item' onClick={() => {
          setCategoryId(list.id)
        }} />
        <br/>
        <input id='category-list-delete' type='submit' value='Delete Category' onClick={() => destroyCategory(list.user_id, list.id)} />
        <br/>
        <input id='category-list-edit' type='submit' value='Edit Category' onClick={() => setCategoryFormData(list)} />
        <br/>
        <input id='category-list-create' type='submit' value='View Inventory' onClick={() => {
          getAllItems(list.id)
        }} />
        </div>
      ))}
    </div>
  )
}

export default CategoriesList;
