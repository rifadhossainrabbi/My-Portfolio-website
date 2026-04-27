import React, { useState } from 'react';
import MyNavLinks from './MyNavLinks';
import { AiOutlineDownload } from 'react-icons/ai';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/skills', text: 'Skills' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <nav className="bg-transparent shadow py-4">
      <div className="max-w-9/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-[#3599e8] to-[#475ae8] bg-clip-text text-transparent">
            Rifad Hossain
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center">
          {navItems.map((item, ind) => (
            <MyNavLinks key={ind} to={item.path}>
              {item.text}
            </MyNavLinks>
          ))}
        </ul>

        {/* Right Button */}
        <div className="hidden lg:block">
          <a className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#363a5a] hover:bg-[#1c2238] transition">
            <AiOutlineDownload />
            Download CV
          </a>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-4 px-6 pb-4 space-y-3">
          {navItems.map((item, ind) => (
            <div key={ind} onClick={() => setOpen(false)}>
              <MyNavLinks to={item.path}>{item.text}</MyNavLinks>
            </div>
          ))}

          <a className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#363a5a] w-fit">
            <AiOutlineDownload />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
