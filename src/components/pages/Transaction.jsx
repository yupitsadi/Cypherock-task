import React, { useContext, useEffect, useState } from 'react';
import { WalletContext } from '../useContextWallet.jsx';
import Bitcoin from '../../assets/Bitcoin.png'; 

const Transaction = () => {
  const { walletAddress, walletName } = useContext(WalletContext);
  const [transactions, setTransactions] = useState([]);
  const Date = "05-07-2024";
  const Time = "12:30 AM"


  useEffect(() => {
    if (walletAddress) {
      getTransaction();
    }
  }, [walletAddress]);

  async function getTransaction() {
    try {
      const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${walletAddress}`);
      const data = await response.json();
      const confirmedTxs = data.txrefs || [];
      const unconfirmedTxs = data.unconfirmed_txrefs || [];

      // Add a flag to distinguish between confirmed and unconfirmed transactions
      const combinedTxs = [
        ...confirmedTxs.map(tx => ({ ...tx, confirmed: true })),
        ...unconfirmedTxs.map(tx => ({ ...tx, confirmed: false }))
      ];

      setTransactions(combinedTxs);
    } catch (error) {
      console.log("Error in Transaction API", error);
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-orange-500 text-xl mb-4">Transactions</h2>
      <div>Total Transactions - {transactions.length}</div>
      <table className="w-full mt-4">
        <thead>
          <tr className=" ">
            <th className="p-2">Coin</th>
            <th className="p-2">Wallet</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Result</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="my-4 bg-color2 hover:bg-gray-700">
              <td className="p-2 ">
                <span className='inline-flex'>
                <img src={Bitcoin} alt="Bitcoin" className="inline-block w-6 h-6 mr-2" />
                <div>{Date}</div>
                </span>
                <div className='text-xs '>{Time}</div>
              </td>
              <td className="p-2">{walletName}</td> {/* You can replace 'Aru' with a dynamic wallet name if needed */}
              <td className="p-2">{(tx.value / 1e8).toFixed(8)} BTC</td>
              <td className="p-2">{tx.confirmed ? 'RECEIVED' : 'PENDING'}</td>
              <td className="p-2">{tx.confirmed ? 'SUCCESS' : 'UNCONFIRMED'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
