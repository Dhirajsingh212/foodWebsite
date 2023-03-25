import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar_logo'>
          Foodbar
        </div>
        <div className='navbar_links'>
          <a href='#'>Home</a>
          <a href='#'>Cart</a>
          <a href='#'>Profile</a>
        </div>
        <div className='navbar_contact'>Contact</div>
    </div>
  )
}

export default Navbar