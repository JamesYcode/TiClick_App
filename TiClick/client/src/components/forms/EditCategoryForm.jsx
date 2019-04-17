import React from 'react';


function EditCategoryForm(props) {
  const {
    editCategorySubmit,
    handleEditChange
  } = props
  return(
    <div id='edit-category-form'>
      <h3>Edit Your Category Title</h3>
      <form onSubmit={editCategorySubmit}>
        <input id='edit-category' onChange={handleEditChange} type='text' placeholder='title' name='title' value={props.title}/>
        <br/>
        <input id='edit-button' type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default EditCategoryForm;
