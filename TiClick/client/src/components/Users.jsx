import React from 'react';

function Users(props) {
  return(
    <div>
      {props.users.map(list => (
        <h1>{list.name}</h1>
      ))}
    </div>
  )
}

export default Users;
