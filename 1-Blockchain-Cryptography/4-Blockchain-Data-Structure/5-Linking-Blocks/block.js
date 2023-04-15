const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.data = data;
    }
    toHash() {
        // console.log(this.previousHash)
        return SHA256(this.data + this.previousHash); // a hash!
    }
}

module.exports = Block;
