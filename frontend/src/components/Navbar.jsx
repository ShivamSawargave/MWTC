import React from 'react'

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 mr-6 lg:mr-0 h-24 w-full fixed left-0 right-0 top-0 z-50 bg-sky-200 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 h-20 fixed top-0 right-0 left-0 w-52 p-2 shadow">
              <li className='bg-base-100'><a href='/' className='text-xl text-sky-600'>Home</a></li>
              <li className='bg-base-100'>
                <a className='text-xl text-sky-600'>Others</a>
                <ul className="p-2">
                  <li><a href='/Gallery'>Gallery</a></li>
                  <li><a href='/Video'>Video</a></li>
                  <li><a href='https://g.page/r/CYO_sZcezehYEBE/review'>Plumbing</a></li>
                </ul>
              </li>
              <li className='bg-base-100  pb-10 rounded'><a href='/About' className='text-xl text-sky-600'>About</a></li>
              <li className='bg-base-100 pb-10 rounded-e-box'><a href='/Help' className='text-xl text-sky-600'>Help</a></li>
            </ul>
          </div>
          <a href="/"><img className="btn btn-ghost text-xl h-16 w-" src="logo.jpg" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='text-xl text-sky-600'><a href='/'>Home</a></li>
            <li>
              <details>
                <summary className='text-xl text-sky-600'>Others</summary>
                <ul className="p-2">
                  <li><a href='/Gallery'>Gallery</a></li>
                  <li><a href='/Video'>Video</a></li>
                  <li><a href='https://g.page/r/CYO_sZcezehYEBE/review'>Plumbing</a></li>
                </ul>
              </details>
            </li>
            <li><a href='/About' className='text-xl text-sky-600'>About</a></li>
            <li><a href='/Help' className='text-xl text-sky-600'>Help</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href='/Contact' className="btn text-xl text-sky-600">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar