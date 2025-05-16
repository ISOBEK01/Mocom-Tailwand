import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { IoMenu, IoSearch, IoClose } from 'react-icons/io5'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [sidebarOpen])

  return (
    <div className="top-0 m-auto bg-white max-w-[1280px] z-50">
      <div className='container mx-auto p-5'>
        <header className='flex items-center m-auto max-w-[1300px] justify-between gap-20'>
          <nav className='max-md:hidden'>
            <ul className='flex items-center justify-center gap-20 max-lg:gap-5'>
              <NavLink to={'/'} className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-xl:text-lg'>Home</NavLink>
              <NavLink to={'/shop'} className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-xl:text-lg'>Shop All</NavLink>
              <NavLink to={'/blog'} className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-xl:text-lg'>Blog</NavLink>
            </ul>
          </nav>

          <Link className='w-52 max-sm:w-44' to={'/'}>
            <img className='w-full' src={logo} alt='logo' />
          </Link>

          <div className='flex items-center gap-16 max-lg:gap-5 max-md:hidden'>
            <NavLink className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-lg:text-xl' to={'/about'}>About Us</NavLink>
                        <NavLink className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-lg:text-xl' to={'/contact'}>Contact</NavLink>
            <form className='flex items-center justify-center bg-[#EDF2F4] w-auto h-10 px-2 rounded-lg'>
              <input required className='bg-transparent border-none outline-none text-blue-900 text-lg indent-2 max-xl:hidden' type='search' placeholder='Search Product' />
              <Link to={'/search'} className='bg-transparent text-xl'>
                <IoSearch />
              </Link>
            </form>
            <NavLink className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-lg:text-xl' to={'/login'}>Log Out</NavLink>
          </div>

          <button className='text-2xl cursor-pointer hidden max-md:block' onClick={() => setSidebarOpen(true)}>
            <IoMenu />
          </button>
        </header>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className='flex justify-between items-center p-5 border-b'>
          <Link to={'/'}>
            <img className='w-32' src={logo} alt='logo' />
          </Link>
          <button className='text-2xl' onClick={() => setSidebarOpen(false)}>
            <IoClose />
          </button>
        </div>
        <nav className='flex flex-col p-5 gap-5'>
          <NavLink to={'/'} onClick={() => setSidebarOpen(false)} className='text-xl hover:text-red-500'>Home</NavLink>
          <NavLink to={'/shop'} onClick={() => setSidebarOpen(false)} className='text-xl hover:text-red-500'>Shop All</NavLink>
          <NavLink to={'/blog'} onClick={() => setSidebarOpen(false)} className='text-xl hover:text-red-500'>Blog</NavLink>
          <NavLink to={'/about'} onClick={() => setSidebarOpen(false)} className='text-xl hover:text-red-500'>About Us</NavLink>
           <NavLink className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-lg:text-xl' to={'/contact'}>Contact</NavLink>
          <form className='flex items-center bg-[#EDF2F4] w-full h-10 px-2 rounded-lg'>
            <input required className='bg-transparent border-none outline-none text-blue-900 text-lg indent-2 w-full' type='search' placeholder='Search Product' />
            <Link to={'/search'} className='bg-transparent text-xl'>
              <IoSearch />
            </Link>
          </form>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setSidebarOpen(false)}></div>
      )}
    </div>
  )
}

export default Header
