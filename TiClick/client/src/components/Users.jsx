import React from 'react';

function Users(props) {
  return(
    <div>
      {props.users.map(list => (
        <div key={list.id}>
          <h1>{list.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Users;
