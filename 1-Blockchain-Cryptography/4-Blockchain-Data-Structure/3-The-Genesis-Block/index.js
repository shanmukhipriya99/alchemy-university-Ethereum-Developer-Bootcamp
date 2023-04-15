const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block('Alex paid $10 John') /* TODO: Create the genesis block here */ ];
    }
}

module.exports = Blockchain;
