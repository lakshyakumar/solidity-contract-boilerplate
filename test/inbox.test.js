const assert =  require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
beforeEach(async ()=>{
    // Get the list of all accounts
    accounts = await web3.eth.getAccounts()
        
    //Use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments:['Hello world!']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        })

});

describe('Inbox', ()=>{
    it('deploys a contract',()=>{
        assert.ok(inbox.options.address);
    });
    it('has a default message',async ()=>{
        // Call a method
        const message = await inbox.methods.message().call();
        assert.strictEqual(message,'Hello world!')

    });
    it('can change the message',async ()=>{
        await inbox.methods.setMessage('good bye!').send({
            from: accounts[0]
        });
        const message = await inbox.methods.message().call();
        assert.strictEqual(message,'good bye!')
    });
});