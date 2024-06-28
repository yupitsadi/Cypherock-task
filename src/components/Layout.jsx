import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import SideNavbar from './SideNavbar'

const Layout = () => {
  return (
    <><div className=' bg-by-black text-white'>
    <Navbar/>
    <Outlet/>
    <SideNavbar/>
    </div>
    </>
  )
}

export default Layout