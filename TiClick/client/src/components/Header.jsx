import React from 'react';

function Header(props) {
  const {
    handleLogout
  } = props
  return(
    <div>
      <form>
        <button onClick={props.handleLogout}>
          Log Out
        </button>
      </form>
    </div>
  )
}

export default Header;
