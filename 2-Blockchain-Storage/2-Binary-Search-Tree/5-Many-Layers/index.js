class Tree {
    constructor() {
        this.root = null;
    }
    addNode(node) {
        if (this.root === null) {
            this.root = node;
            return;
        } 
        let parent = this.root;
        while (true) {
            if (node.data < parent.data) {
                if (!parent.left) {
                    parent.left = node;
                    break;
                } else {
                    parent = parent.left;
                }
            }
            if (node.data > parent.data) {
                if (!parent.right) {
                    parent.right = node;
                    break;
                } else {
                    parent = parent.right;
                }
            }
        }
    }
}

module.exports = Tree;
