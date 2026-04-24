import React from 'react';
// import { NavLink } from 'react-router';
import MyNavLinks from './MyNavLinks';
import { AiOutlineDownload } from 'react-icons/ai';

const Navbar = () => {
  const navItems = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/skills',
      text: 'Skills',
    },
    {
      path: '/projects',
      text: 'Projects',
    },
    {
      path: '/contact',
      text: 'Contact',
    },
  ];

  return (
    <nav className="bg-transparent shadow py-4">
      <div className="flex justify-between gap-4 items-center max-w-9/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems.map((item, ind) => (
                <MyNavLinks key={ind} to={item.path}>
                  {item.text}
                </MyNavLinks>
              ))}
            </ul>
          </div>
          <h1 className="text-2xl font-bold">
            <sapn className="bg-linear-to-r from-[#3599e8] to-[#475ae8] bg-clip-text text-transparent">
              Rifad Hossain
            </sapn>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-between gap-4 items-center">
            {navItems.map((item, ind) => (
              <MyNavLinks key={ind} to={item.path}>
                {item.text}
              </MyNavLinks>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-transparent rounded-md border-2 border-[#363a5a]">
            <AiOutlineDownload /> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
