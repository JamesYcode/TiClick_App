import React from 'react';

function ItemForm(props) {
  return(
    <div>
      <form onSubmit={props.handlePostItem}>
        <input onChange={props.handleItemChange} type='text' placeholder='Name of the Product' name='title' value={props.title} />
        <input onChange={props.handleItemChange} type='text' placeholder='Description' name='description' value={props.description} />
        <input onChange={props.handleItemChange} type='text' placeholder='Quantity' name='quantity' value={props.quantity} />
        <input value='Submit' type='submit' />
      </form>
    </div>
  )
}

export default ItemForm;
