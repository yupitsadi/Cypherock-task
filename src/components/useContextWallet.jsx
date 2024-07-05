import React, { createContext, useState } from 'react';

export const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState('tb1qqjqkmuaczcaqazmjctkmgdf7ac7kgxttpy7h9q');
  const [walletName, setWalletName] = useState('');

  const updateWallet = (name, address) => {
    setWalletName(name);
    setWalletAddress(address);
  };

  return (
    <WalletContext.Provider value={{ walletAddress, walletName, updateWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
