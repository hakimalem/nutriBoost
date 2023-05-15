import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar2 } from './Navbar2';

export const Layout = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet />
      <Footer />
    </div>
  );
};
