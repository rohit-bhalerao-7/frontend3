import MyContractABI from './MyContractABI.json';
async function supply(web3, accounts, amount) {
    const contractAddress = "YOUR_CONTRACT_ADDRESS";
    const contract = new web3Instance.eth.Contract(MyContractABI, contractAddress);
    
    try {
        await contract.methods.supply(amount).send({ from: accounts[0] });
    } catch (error) {
        console.error("Failed to supply", error);
    }
}

async function borrow(web3, accounts, amount) {
    const contractAddress = "YOUR_CONTRACT_ADDRESS";
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    
    try {
        await contract.methods.borrow(amount).send({ from: accounts[0] });
    } catch (error) {
        console.error("Failed to borrow", error);
    }
}

export { supply, borrow };
