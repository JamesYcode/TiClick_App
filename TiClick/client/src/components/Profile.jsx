import React from 'react';
import {Link} from 'react-router-dom';

function Profile(props) {
  const {
  currentUser,
  getAllItems,
  userItem
} = props
  return(
    <div className='nav'>
      <nav className='main-nav'>
      <Link id='create-inventory' to='/users/create/new/inventory'>Create Inventory</Link>
      <button id='item-list' onClick={() => {
        getAllItems(currentUser.id, userItem.category_id)
        }}><Link id='item-list-link' to='/users/items'>List of items</Link></button>}
      </nav>
    </div>
  )
}

export default Profile;
