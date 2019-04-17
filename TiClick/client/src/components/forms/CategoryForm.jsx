import React from 'react';


function CategoryForm(props) {
  return(
    <div>
      <h3>Create A Category</h3>
      <form onSubmit={props.handlePostCategory}>
        <input id='create-category' type='text' onChange={props.handleChange} placeholder='Title Of Your Category' name='title' value={props.title} />
        <br/>
        <input id='create-button' type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default CategoryForm;
