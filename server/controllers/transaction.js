import Transaction from "./../models/transaction.js";

const postApiTransaction = async (req, res) => {
    const { amount, type, category, description } = req.body;

    const transaction = new Transaction({
        amount,
        type,
        category,
        description
    });

    try {
        const savedTransaction = await transaction.save();

        return res.json({
            success: true,
            message: 'Transaction saved',
            data: savedTransaction
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        });
    }
}

const getApiTransaction = async (req, res) => {
    const allTransactions = await Transaction.find();

    return res.json({
        success: true,
        message: 'Successfully fetched all transactions',
        data: allTransactions
    })
}

export { postApiTransaction , getApiTransaction }