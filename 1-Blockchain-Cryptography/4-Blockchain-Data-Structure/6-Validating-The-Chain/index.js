const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() /* TODO: Create the genesis block here */ ];
    }
    addBlock(block) {
        block.previousHash = this.chain[this.chain.length-1].toHash();
        // console.log(block)
        this.chain.push(block);
    }
    isValid() {
        let isValid = true;
        this.chain.forEach((block, index) => {
            if (index > 0) {
                if (block.previousHash.toString() !== this.chain[index - 1].toHash().toString()) {
                    isValid = false;
                }
            }
        });
        return isValid;
    }
    
}

module.exports = Blockchain;
