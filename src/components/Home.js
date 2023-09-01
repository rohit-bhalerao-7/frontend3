import React from 'react';

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* <header className="bg-blue-600 text-white p-4">
                <nav className="flex justify-between items-center">
                    <div>
                        <a href="/dashboard" className="mr-4 text-white hover:text-gray-300">Dashboard</a>
                        <a href="/markets" className="mr-4 text-white hover:text-gray-300">Markets</a>
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Connect Wallet</button>
                </nav>
            </header> */}
            <main className="p-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to the Lending and Borrowing Platform</h1>
                <p className="text-xl">Choose a market, lend or borrow assets with ease.</p>
            </main>
        </div>
    );
}

export default Home;
