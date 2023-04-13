const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction);
}

function mine() {
    // TODO: mine a block
    let transactions = [];
    while (transactions.length < MAX_TRANSACTIONS) {
        transactions.push(mempool.pop())
    }
    transactions = transactions.filter(function(tx) {return tx !== undefined});
    let block;
    for (let i=0; ; i++) {
        block = { nonce: i, id: blocks.length, transactions };
        block.hash = SHA256(JSON.stringify(block));
        if (BigInt(`0x${block.hash}`) < TARGET_DIFFICULTY) break;
    }
    blocks.push(block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};
