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
          <p>{list.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemsList;
