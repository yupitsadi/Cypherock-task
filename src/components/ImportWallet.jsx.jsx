import React, { useState } from 'react';

const ImportWallet = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-color3 bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg text-white max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Import Wallet</h2>
          <button onClick={onClose} className="text-white">
            &times;
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Enter your wallet name:</label>
          <input type="text" className="w-full p-2 bg-gray-700 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Enter your Mnemonic:</label>
          <textarea className="w-full p-2 bg-gray-700 rounded"></textarea>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ImportWallet;
