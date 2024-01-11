import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {

  const navItems = (
    <>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/menu'>MENU</Link></li>
      <li><Link to=''>RESTAURANT</Link></li>
      <li><Link to=''>GALLERY</Link></li>
      <li><Link to=''>ABOUT</Link></li>
      <li><Link to=''>BLOG</Link></li>
      <li><Link to=''>CONTACT</Link></li>
    </>
  )
  return (
    <div className='navbar xl:px-20 '>
      <div className='navbar-start'>
        <Link>
          <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
        </Link>
      </div>
      <div className='navbar-center'>
        <ul className="menu menu-horizontal hidden lg:flex">
          {navItems}
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='flex justify-end'>
          <div className="drawer ">
            <input id="my-drawer"
              type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:hidden">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-circle drawer-button">
                <IoMenu className='w-5 h-5' /></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer"
                aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {navItems}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
