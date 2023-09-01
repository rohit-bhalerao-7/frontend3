async function connectWallet(web3, setAccounts) {
    if (!web3) return;
    
    try {
        const accounts = await web3.eth.requestAccounts(); 
        setAccounts(accounts);
    } catch (error) {
        console.error("Failed to connect wallet", error);
    }
}

export default connectWallet;
