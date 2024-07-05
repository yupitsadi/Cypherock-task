import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Wallet from "../assets/Wallet.png";
import Transactions from "../assets/Transactions.png";
import Line from "../assets/Line.png";
import { WalletContext } from "./useContextWallet";

const SideNavbar = () => {
  const { walletName, walletAddress } = useContext(WalletContext);

  return (
    <div className="ml-2 bg-sidenavcolor w-1/4 h-[43rem] rounded-lg flex flex-col justify-between">
      <div className="flex items-center flex-col">
        <Link to="/" className="my-4">
          Home
        </Link>
        <img src={Line} alt="Line" />
        <div className="">
          <Link to="/wallets" className="my-4 flex flex-row items-center">
            <img src={Wallet} alt="Wallet" className="mr-2" />
            Wallet
          </Link>
          {walletName && (
            <div className="subWallet my-2 px-4 flex flex-row items-center">
              {walletName}  
              
            </div>
          )}
        </div>
        <img src={Line} alt="Line" />

        <Link to="/transaction" className="my-4 flex flex-row items-center ">
          <img src={Transactions} alt="Transactions" className="mr-2" />
          Last Transaction
        </Link>
        <img src={Line} alt="Line" />
      </div>
      <div className="py-3 text-center bg-support rounded-b-lg hover:bg-orange-700">
        Support
      </div>
    </div>
  );
};

export default SideNavbar;
