import React from 'react';

function Header(props) {
  const {
    handleLogout,
    currentUser
  } = props
  return(
    <div>
      {currentUser.id && <header className='main-header'>
        <h3 id='welcome-user'>Welcome {currentUser.name}</h3>
        <form className='main-logout'>
          <button id='logout-button' onClick={props.handleLogout}>
            Log Out
          </button>
        </form>
      </header>}
    </div>
  )
}

export default Header;
