import React from 'react'
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <>
    <div className=" p-3 border-3 ">
            <div className="flex ml-5">
                <img src={logo} alt="" width="19" height="23" /> 
                <h1 className='ml-2'>cySync</h1> 
                <button className='mr-4 absolute right-0 text-go text-orange-300'>
                  Synced
                  </button>
            </div>
        </div>  
    </>
  )
}

export default Navbar