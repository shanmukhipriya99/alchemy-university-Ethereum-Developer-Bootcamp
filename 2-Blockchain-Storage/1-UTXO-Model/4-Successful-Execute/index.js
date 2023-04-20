class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        let inputUTXOsAmount = 0;
        let outputUTXOsAmount = 0;
        this.inputUTXOs.forEach(tx => {
            if (tx.spent === true) {
                throw new Error('Already Spent!');
            }
            inputUTXOsAmount += tx.amount;
        })
        this.outputUTXOs.forEach(tx => {
            outputUTXOsAmount += tx.amount;
        })
        if (outputUTXOsAmount > inputUTXOsAmount) {
            throw new Error('Input less than Output')
        }
        this.inputUTXOs.forEach(tx => {
            tx.spent = true;
        })
    }
}

module.exports = Transaction;
