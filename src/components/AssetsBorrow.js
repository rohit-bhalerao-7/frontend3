import React from "react";
import { useContext } from 'react';
import { Web3Context } from '../contexts/Web3Context';
import { supply } from '../utils/interactWithContract';

function AssetsBorrow({ assets }) {
  function handleBorrow(asset) {
    // This function will handle the logic for borrowing the asset.
    // This might include opening a web3 wallet, calling a smart contract, etc.
    console.log(`Borrowing asset: ${asset.name}`);
  }
  return (
    <div className="bg-white p-4 rounded shadow my-4">
      <h2 className="text-2xl font-bold mb-4">Assets to Borrow</h2>
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="border-b border-gray-200 py-4 flex justify-between items-center"
        >
          <div className="flex items-center">
            <img src={asset.icon} alt={asset.name} className="mr-4 w-8 h-8" />
            <span className="mr-4">{asset.name}</span>
            <span className="text-gray-500">Available: {asset.available}</span>
          </div>
          <div>
            <span className="mr-4 text-red-500">APY: {asset.apy}%</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
              onClick={() => handleBorrow(asset)}
            >
              Borrow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssetsBorrow;
