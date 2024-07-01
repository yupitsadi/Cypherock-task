import React, { useState } from 'react';
import Bitcoin from '../../assets/Bitcoin.png';
import Bin from '../../assets/Bin.png';
import ImportWallet from '../ImportWallet.jsx';
import Add from '../../assets/Add.png'

const wallets = [
  { name: 'BITCOIN 0', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 1', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 2', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 3', holding: 'BTC 0.00256' },
  { name: 'BITCOIN 4', holding: 'BTC 0.00256' },
];

const Wallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="float-right">
        <button
          onClick={openModal}
          className="bg-gray-700 hover:bg-gray-600 text-orange-300 py-2 px-4 rounded"
        >
        <img className='inline-block mr-1' width="20" height="20" src={Add}></img>
           IMPORT WALLET
        </button>
      </div>
      <div className="p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <div>Total Coins - {wallets.length}</div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="rounded-lg">
          <div className="flex justify-between items-center py-2 px-4 text-sm font-semibold">
            <div>Coin</div>
            <div>Holding</div>
            <div>Actions</div>
          </div>
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="bg-color2 my-4 flex justify-between items-center py-2 px-4 hover:bg-gray-700"
            >
              <div className="flex items-center">
                <img className="mr-2" src={Bitcoin} alt="Bitcoin" />
                {wallet.name}
              </div>
              <div>{wallet.holding}</div>
              <div>
                <button className="text-gray-400 hover:text-red-500">
                  <img src={Bin} alt="recycle-bin" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImportWallet isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Wallet;
