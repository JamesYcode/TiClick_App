import React from 'react';

function CategoriesList(props) {
  return(
    <div>
      {props.categoriesList.map((list) => (
        <div key={list.id}>
          <p>{list.title}</p>
        </div>
      ))}
    </div>
  )
}

export default CategoriesList;
