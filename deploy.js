const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
require('dotenv').config()

const provider = new  HDWalletProvider(
    process.env.ETHEREUM_SEED_PHRASE,
    process.env.INFURA_LINK
);

const web3 = new Web3(provider);



const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log('attempting to deploy from account ', accounts[0])

    //Use one of the accounts to deploy the contract
    const inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hello world!']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        })
    console.log('Contract deployed to: ', inbox.options.address);
};
deploy();