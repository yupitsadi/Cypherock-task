import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import SideNavbar from './SideNavbar';

const Layout = () => {
  return (
    <div className="bg-by-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <SideNavbar />
        <div className="w-3/4 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
