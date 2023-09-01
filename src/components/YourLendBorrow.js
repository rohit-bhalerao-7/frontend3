import React from 'react';

function YourLendBorrow({ lendData, borrowData }) {
    return (
        <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Your Lend</h2>
                {/* Map through lendData to display lent assets */}
            </div>
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Your Borrow</h2>
                {/* Map through borrowData to display borrowed assets */}
            </div>
        </div>
    );
}

export default YourLendBorrow;
