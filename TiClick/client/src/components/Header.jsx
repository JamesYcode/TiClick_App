import React from 'react';

function Header(props) {
  const {
    handleLogout
  } = props
  return(
    <div>
      <header>
        <h1>TiClick App</h1>
      </header>
        <form>
          <button id='logout-button' onClick={props.handleLogout}>
            Log Out
          </button>
        </form>
    </div>
  )
}

export default Header;
