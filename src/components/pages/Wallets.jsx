import React, { useState, useContext, useEffect } from 'react';
import Bitcoin from '../../assets/Bitcoin.png'
import Bin from '../../assets/Bin.png';
import ImportWallet from '../ImportWallet.jsx';
import Add from '../../assets/Add.png';
import { WalletContext } from '../useContextWallet.jsx';
import { AppContext } from '../../App';

const Wallets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wallets, setWallets] = useState([]);
  const { walletAddress } = useContext(WalletContext);
  const { refreshFlag } = useContext(AppContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    getWalletInfo();
  }, [walletAddress, refreshFlag]);

  async function getWalletInfo() {
    try {
      const response = await fetch(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${walletAddress}/full`
      );
      const data = await response.json();
      const newWallets = data.txs.map((tx, index) => ({
        name: `Wallet ${index + 1}`,
        holding: `BTC ${tx.total / 100000000}`
      }));
      setWallets(newWallets);
      console.log(newWallets);
    } catch (error) {
      console.log("Some error happened (Error on Wallet API) Or too many requests");
    }
  }

  return (
    <>
      <div className="float-right">
        <button
          onClick={openModal}
          className="bg-gray-700 hover:bg-gray-600 text-orange-300 py-2 px-4 rounded"
        >
          <img className="inline-block mr-1" width="20" height="20" src={Add} alt="Add" />
          IMPORT WALLET
        </button>
      </div>
      <div className="p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <div>Total Coins - {wallets.length}</div>
        </div>
        <div className='float-left'>Wallet - {walletAddress}</div>
        <br />
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

export default Wallets;
