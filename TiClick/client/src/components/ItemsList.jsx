import React from 'react';

function ItemsList(props) {
  return(
    <div className='main-item-list'>
      {props.itemsList.map(list => (
        <div id='item-list' key={list.id}>
          <p><strong>Title:</strong>{list.title}</p>
          <p><strong>Description:</strong>{list.description}</p>
          <p><strong>quantity:</strong>{list.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemsList;
