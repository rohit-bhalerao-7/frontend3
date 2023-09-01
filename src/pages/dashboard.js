import React, { useState } from 'react';
import Header from '../components/Header';
import MarketSelector from '../components/MarketSelector';
import YourLendBorrow from '../components/YourLendBorrow';
import AssetsSupply from '../components/AssetsSupply';
import AssetsBorrow from '../components/AssetsBorrow';

function Dashboard() {
    const [selectedMarket, setSelectedMarket] = useState('ethereum');
    const lendData = [
        {
            id: 1,
            name: 'Ethereum',
            walletBalance: '2.34',
            apy: '3.5',
            canBeCollateral: true,
            icon: '/path/to/ethereum-icon.png'
        },
        {
            id: 2,
            name: 'Bitcoin',
            walletBalance: '1.25',
            apy: '2.5',
            canBeCollateral: true,
            icon: '/path/to/bitcoin-icon.png'
        },
        {
            id: 3,
            name: 'Ripple',
            walletBalance: '150',
            apy: '2.8',
            canBeCollateral: false,
            icon: '/path/to/ripple-icon.png'
        },
        {
            id: 4,
            name: 'Litecoin',
            walletBalance: '4',
            apy: '3.1',
            canBeCollateral: true,
            icon: '/path/to/litecoin-icon.png'
        },
        {
            id: 5,
            name: 'Cardano',
            walletBalance: '90',
            apy: '2.9',
            canBeCollateral: false,
            icon: '/path/to/cardano-icon.png'
        },
        {
            id: 6,
            name: 'Polkadot',
            walletBalance: '23',
            apy: '3.3',
            canBeCollateral: true,
            icon: '/path/to/polkadot-icon.png'
        }
    ];
    
    const borrowData = [
        {
            id: 1,
            name: 'Ethereum',
            available: '100',
            apy: '5.0',
            icon: '/path/to/ethereum-icon.png'
        },
        {
            id: 2,
            name: 'Bitcoin',
            available: '80',
            apy: '4.8',
            icon: '/path/to/bitcoin-icon.png'
        },
        {
            id: 3,
            name: 'Ripple',
            available: '2000',
            apy: '5.2',
            icon: '/path/to/ripple-icon.png'
        },
        {
            id: 4,
            name: 'Litecoin',
            available: '150',
            apy: '5.1',
            icon: '/path/to/litecoin-icon.png'
        },
        {
            id: 5,
            name: 'Cardano',
            available: '1800',
            apy: '5.3',
            icon: '/path/to/cardano-icon.png'
        },
        {
            id: 6,
            name: 'Polkadot',
            available: '550',
            apy: '4.9',
            icon: '/path/to/polkadot-icon.png'
        }
    ];
    
    
   
    
            
    const assets = [];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* <Header /> */}
            <main className="p-8">
                <MarketSelector onMarketChange={setSelectedMarket} />
                <YourLendBorrow lendData={lendData} borrowData={borrowData} />
                <AssetsSupply assets={lendData} />
                <AssetsBorrow assets={borrowData} />
            </main>
        </div>
    );
}

export default Dashboard;
