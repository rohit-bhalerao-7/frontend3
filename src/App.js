import React from 'react';
import { Web3Provider } from './contexts/web3context.js';
import Web3 from 'web3';

import { 
  BrowserRouter as Router,
  Routes, 
  Route  
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Header />

          <main className="p-8">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Home />} /> 
            </Routes>
          </main>
        
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;
