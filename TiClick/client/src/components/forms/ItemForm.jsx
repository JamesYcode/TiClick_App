import React from 'react';

function ItemForm(props) {
  return(
    <div id='item-form'>
      <form className='main-item-form' onSubmit={props.handlePostItem}>
        <input id='item-form-title' onChange={props.handleItemChange} type='text' placeholder='Name of the Product' name='title' value={props.title} />
        <br/>
        <input id='item-form-description' onChange={props.handleItemChange} type='text' placeholder='Description' name='description' value={props.description} />
        <br/>
        <input id='item-form-quantity' onChange={props.handleItemChange} type='text' placeholder='Quantity' name='quantity' value={props.quantity} />
        <br/>
        <input value='Submit' type='submit' />
      </form>
    </div>
  )
}

export default ItemForm;
