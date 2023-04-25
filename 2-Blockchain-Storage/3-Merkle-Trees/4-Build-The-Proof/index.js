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
    getProof(index, layer = this.leaves, proof = []) {
        if (layer.length === 1) return proof;
        const newLayer = [];
        for (let i = 0; i < layer.length; i += 2) {
            let left = layer[i];
            let right = layer[i + 1];
            if (!right) {
                newLayer.push(left);
            }
            else {
                newLayer.push(this.concat(left, right));

                if (i === index || i === index - 1) {
                    let isLeft = !(index % 2);
                    proof.push({
                        data: isLeft ? right : left,
                        left: !isLeft
                    });
                }
            }
        }
        return this.getProof(Math.floor(index / 2), newLayer, proof);
    }
}

module.exports = MerkleTree;
