import React from 'react';

function Items(props) {
  return(
    <div>
      {props.items.map(list => (
        <div key={list.id}>
          <h1>{list.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Items;
