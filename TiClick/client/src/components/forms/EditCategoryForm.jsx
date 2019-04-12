import React from 'react';


function EditCategoryForm(props) {
  const {
    handleChange,
    title,
    editCategorySubmit,
    handleEditChange
  } = props
  return(
    <div>
      <form onSubmit={editCategorySubmit}>
        <input onChange={handleEditChange} type='text' placeholder='title' name='title' value={props.title}/>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default EditCategoryForm;
