const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() /* TODO: Create the genesis block here */ ];
    }
    addBlock(block) {
        this.chain.push(block);
    }
    
}

module.exports = Blockchain;
