const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    let res = COLORS.map((item) => {
        if(toHex(hash) === toHex(sha256(utf8ToBytes(item)))) {
            return item;
        } else return ""
    })
    return res.join("")
}

module.exports = findColor;
