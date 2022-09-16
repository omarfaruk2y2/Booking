import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>React</span>
            <div className='navItem'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;