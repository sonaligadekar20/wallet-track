import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Transaction from './models/transaction.js';

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
        console.log('MongoDB connected');
    }
}
connectDB();

app.get('/api/health', async (req, res)=>{
    res.json({
        success: true,
        message: 'Server is running'
    })
});

app.post('/api/transaction', async (req, res)=>{
     const {amount, type, category, description} = req.body;

     const transaction = new Transaction({
        amount,
        type,
        category,
        description
     });
    
     try{
        const savedTransaction = await transaction.save();

      return res.json({
        success: true,
        message: 'Transaction saved',
        data : savedTransaction
     });
     } catch (err) {
       return res.json({
        success: false,
        message: err.message
       });
     }   
});

app.get('/api/transactions', async (req, res) =>{
    const allTransactions = await Transaction.find();

    return res.json({
        success: true,
        message: 'Successfully fetched all transactions',
        data : allTransactions
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});