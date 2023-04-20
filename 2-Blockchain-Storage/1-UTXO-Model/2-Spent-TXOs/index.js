class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        this.inputUTXOs.forEach(tx => {
            if (tx.spent === true) {
            throw new Error('Already Spent!');
        }
        })
    }
}

module.exports = Transaction;
