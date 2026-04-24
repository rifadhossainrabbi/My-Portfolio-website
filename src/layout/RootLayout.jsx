import React from 'react';
import HomePage from '../pages/HomePage';
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default RootLayout;