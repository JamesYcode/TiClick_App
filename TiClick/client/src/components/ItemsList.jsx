import React from 'react';

function ItemsList(props) {
  const {
    items,
    currentUser,
    userItem
  } = props
  return(
    <div>
      {props.itemsList.map(list => (
        <div key={list.id}>
          <p><strong>Title:</strong> {list.title} <strong>Description:</strong> {list.description} <strong>Quantity:</strong> {list.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemsList;
