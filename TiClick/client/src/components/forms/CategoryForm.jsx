import React from 'react';


function CategoryForm(props) {
  return(
    <div>
      <form onSubmit={props.handlePostCategory}>
        <input type='text' onChange={props.handleChange} placeholder='Title Of Your Category' name='title' value={props.title} />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default CategoryForm;
