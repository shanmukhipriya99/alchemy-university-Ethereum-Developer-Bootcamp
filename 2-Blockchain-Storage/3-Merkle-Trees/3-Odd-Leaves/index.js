class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves) {
        let concat = this.concat;
        let layers = [];
        if (leaves.length === 1) {
            return leaves[0];
        }
        for (let i = 0; i < leaves.length; i += 2) {
            if (leaves[i + 1]) {
                layers.push(concat(leaves[i], leaves[i + 1]));
            }
            else {
                layers.push(leaves[i]);
            }
        }
        return this.getRoot(layers);
    }
}

module.exports = MerkleTree;
