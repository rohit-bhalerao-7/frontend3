import React from "react";
import { useContext } from 'react';
import { Web3Context } from '../contexts/Web3Context';
import { supply } from '../utils/interactWithContract';

function AssetsSupply({ assets }) {
  const { web3, accounts } = useContext(Web3Context);
  function handleSupply(asset) {
    supply(web3, accounts, amount);
    // This function will handle the logic for supplying the asset.
    // This might include opening a web3 wallet, calling a smart contract, etc.
    console.log(`Supplying asset: ${asset.name}`);
  }

  return (
    <div className="bg-white p-4 rounded shadow my-4">
      <h2 className="text-2xl font-bold mb-4">Assets to Supply</h2>
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="border-b border-gray-200 py-4 flex justify-between items-center"
        >
          <div className="flex items-center">
            <img src={asset.icon} alt={asset.name} className="mr-4 w-8 h-8" />
            <span className="mr-4">{asset.name}</span>
            <span className="text-gray-500">
              Wallet Balance: {asset.walletBalance}
            </span>
          </div>
          <div>
            <span className="mr-4 text-green-500">APY: {asset.apy}%</span>
            {asset.canBeCollateral && (
              <span className="mr-4 text-blue-500">
                Can be used as collateral
              </span>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              onClick={() => handleSupply(asset)}
            >
              Supply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssetsSupply;
