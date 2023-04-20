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
    hasNode(number) {
        let parent = this.root;
        while (true) {
            if (parent.data === number) {
                return true;
            }
            if (number < parent.data) {
                if (!parent.left) {
                    return false;
                } else {
                    parent = parent.left;
                }
            }
            if (number > parent.data) {
                if (!parent.right) {
                    return false;
                } else {
                    parent = parent.right;
                }
            }
        }
    }
}

module.exports = Tree;
