const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() /* TODO: Create the genesis block here */ ];
    }
    addBlock(block) {
        block.previousHash = this.chain[this.chain.length-1].toHash();
        console.log(block)
        this.chain.push(block);
    }
    
}

module.exports = Blockchain;
