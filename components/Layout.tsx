
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="bg-gradient-to-br from-primary-black via-dark-gray to-primary-black min-h-screen text-primary-white">
      <Navbar />
      <main className="main-content pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
