import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import myContractABI from './myContractABI.json';

export const Web3Context = createContext(); 

export const Web3Provider = ({ children }) => {

  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        
        setWeb3(web3);
        setAccounts(accounts);
      } else {
        console.error("Ethereum provider not detected");
      }
    }
    loadProvider();
  }, []);

  return (
    <Web3Context.Provider value={{ web3, accounts }}>
      {children}
    </Web3Context.Provider>
  );
};