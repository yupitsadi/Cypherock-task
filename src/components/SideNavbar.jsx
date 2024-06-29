import React from 'react'
import Wallet from '../assets/Wallet.png'
import Transactions from '../assets/Transactions.png'
import Line from '../assets/Line.png'

const SideNavbar = () => {
  return (
    <>
    <div className='ml-2 bg-sidenavcolor w-1/4 h-[40rem] rounded-lg '>
      <div className='flex items-center flex-col'>
        <div className='my-4 '>Home</div>
        <img src={Line}/>
        <div className='my-4 flex flex-row'> <img src={Wallet}/> Wallet</div>
        <img src={Line}/>
        <div className='my-4 flex flex-row'><img src={Transactions}/>Transaction</div>
        <img src={Line}/>
        <div className='inset-x-0 bottom-0'>Support</div>
      </div>
    </div>
    </>
  )
}

export default SideNavbar