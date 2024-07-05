import React, { useContext } from 'react';
import logo from '../assets/Logo.png';
import { AppContext } from '../App';

const Navbar = () => {
  const { triggerRefresh } = useContext(AppContext);

  return (
    <div className="p-3 border-3">
      <div className="flex ml-5">
        <img src={logo} alt="" width="19" height="23" />
        <h1 className="ml-2">cySync</h1>
        <button
          className="mr-4 absolute right-0 text-go text-orange-300 hover:bg-orange-700 hover:text-white"
          onClick={triggerRefresh}
        >
          <span className="inline-flex px-3">
            <img
              className="absolute inset-x-0 bottom-0"
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/synchronize.png"
              alt="synchronize"
            />
          </span>
          Synced
        </button>
      </div>
    </div>
  );
};

export default Navbar;
