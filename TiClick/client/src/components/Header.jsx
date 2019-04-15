import React from 'react';

function Header(props) {
  const {
    handleLogout,
    currentUser
  } = props
  return(
    <div>
      <header className='main-header'>
        <h1>Inventory App</h1>
      </header>
        {currentUser.id && <form>
          <button id='logout-button' onClick={props.handleLogout}>
            Log Out
          </button>
        </form>}
    </div>
  )
}

export default Header;
