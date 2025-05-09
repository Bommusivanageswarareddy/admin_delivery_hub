import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
         <h2 className='logo'>Delivery Hub</h2>
         <span className='adminpanel'>Admin Panel</span>
         <img className='profile' src={assets.profile_image} alt="profile" />
    </div>
  )
}

export default Navbar