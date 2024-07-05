import React, { useState, useContext } from 'react';
import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import { BIP32Factory } from 'bip32';
import { WalletContext } from './useContextWallet';

const bip32 = BIP32Factory(ecc);

const ImportWallet = ({ isOpen, onClose }) => {
  const [mnemonic, setMnemonic] = useState('');
  const [walletName, setWalletName] = useState('');
  const [error, setError] = useState(null);
  const { updateWallet } = useContext(WalletContext);

  const handleSubmit = async () => {
    try {
      const seed = await bip39.mnemonicToSeed(mnemonic);
      const network = bitcoin.networks.testnet;
      const root = bip32.fromSeed(seed, network);
      const path = "m/84'/1'/0'";
      const childNode = root.derivePath(path);

      const { address } = bitcoin.payments.p2pkh({
        pubkey: childNode.publicKey,
        network: bitcoin.networks.testnet,
      });
      
      updateWallet(walletName, address);

      console.log('Network:', network);
      console.log('Root Key:', root);
      console.log('Child Node:', childNode);
      console.log('Wallet Address:', address);
      onClose(); 
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg text-white max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Import Wallet</h2>
          <button onClick={onClose} className="text-white">&times;</button>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Enter your wallet name:</label>
          <input
            type="text"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Enter your Mnemonic:</label>
          <textarea
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        >
          Import Wallet
        </button>
      </div>
    </div>
  );
};

export default ImportWallet;
