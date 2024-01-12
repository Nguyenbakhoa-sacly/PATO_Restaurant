import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const NavItems = ({ isSticky }) => (
  <>
    <li>
      <Link
        className={` text-lg
        ${isSticky ? "lg:text-slate-900" : 'lg:text-white'}
         hover:text-rose-800`}
        to='/'>HOME</Link></li>
    <li>
      <Link
        className={` text-lg
        ${isSticky ? "lg:text-slate-900" : 'lg:text-white'}
         hover:text-rose-800`}
        to='/menu'>MENU</Link></li>
    <li>
      <Link
        className={` text-lg
        ${isSticky ? "lg:text-slate-900" : 'lg:text-white'}
         hover:text-rose-800`}
        to=''>RESTAURANT</Link></li>
    <li>
      <Link
        className={` text-lg
        ${isSticky ? "lg:text-slate-900" : 'lg:text-white'}
         hover:text-rose-800`}
        to=''>GALLERY</Link></li>
    <li>
      <Link
        className={` text-lg
        ${isSticky ? "lg:text-slate-900" : 'lg:text-white'}
         hover:text-rose-800`}
        to=''>ABOUT</Link></li>
    <li>
      <Link
        className={` text-lg
        ${isSticky ? "lg:text-slate-900" : 'lg:text-white'}
         hover:text-rose-800`}
        to=''>BLOG</Link></li>
    <li>
      <Link
        className={` text-lg
        ${isSticky ? "lg:text-slate-900" : 'lg:text-white'}
         hover:text-rose-800`}
        to=''>CONTACT</Link></li>
  </>
)
const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <>
      <div className={`fixed z-50 top-0 left-0 right-0 ${isSticky ?
        "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
        <div className='max-w-screen-xl container mx-auto  transition-all duration-300 '>
          <div className='navbar xl:px-20 py-4 '>
            <div className='navbar-start'>
              <Link>
                {
                  isSticky ?
                    <img className="w-32 h-auto" src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png" alt="" />
                    :
                    <img className="w-32 h-auto" src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
                }
              </Link>
            </div>
            <div className='navbar-center'>
              <ul className="menu menu-horizontal hidden lg:flex">
                <NavItems isSticky={isSticky} />
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
                      <NavItems />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
