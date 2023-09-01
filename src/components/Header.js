import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="flex justify-between items-center">
                <div>
                    <Link to="/" className="mr-4 text-white hover:text-gray-300">Home</Link>
                    <Link to="/dashboard" className="mr-4 text-white hover:text-gray-300">Dashboard</Link>
                    <a href="/markets" className="mr-4 text-white hover:text-gray-300">Markets</a>
                    
                </div>
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Connect Wallet</button>
            </nav>
        </header>
    );
}

export default Header;
