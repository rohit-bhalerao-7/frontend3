import React from 'react';

function MarketSelector({ onMarketChange }) {
    return (
        <div className="my-4">
            <label htmlFor="market" className="block text-xl mb-2">Select Market:</label>
            <select 
                id="market" 
                className="border rounded p-2 w-64"
                onChange={(e) => onMarketChange(e.target.value)}
            >
                <option value="ethereum">Ethereum</option>
                <option value="polygon">Polygon</option>
                {/* Add more markets as needed */}
            </select>
        </div>
    );
}

export default MarketSelector;
