import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
  const {
    handleLogout,
    currentUser
  } = props
  return(
    <div>
      {currentUser.id && <header className='main-header'>
        <h3 id='welcome-user'>Welcome {currentUser.name}</h3>
        <Link id='create-inventory' to='/users/create/new/inventory'>Create Inventory</Link>
        <form className='main-logout'>
          <button id='logout-button' onClick={handleLogout}>
            Log Out
          </button>
        </form>
      </header>}
    </div>
  )
}

export default Header;
