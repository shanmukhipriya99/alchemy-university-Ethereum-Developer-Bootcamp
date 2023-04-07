const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const hashedMsg = hashMessage(message);
    return secp.recoverPublicKey(hashedMsg, signature, recoveryBit);
}

module.exports = recoverKey;
