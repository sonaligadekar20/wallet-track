import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { getApiHealth } from "./controllers/health.js"
import { postApiTransaction, getApiTransaction, putApiTransaction, deleteApiTransaction, getApiTransactionUserById, getApiTransactionById} from './controllers/transaction.js';
import { postApiSignup, postApiLogin } from './controllers/user.js';

const app = express();
app.use(express.json());

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        if (conn) {
            console.log('MongoDB connected');
        }
    }
    catch(e){
        console.log(e.message)
    }
};
connectDB();

app.get('/api/health', getApiHealth);

// Post transaction
app.post('/api/transaction', postApiTransaction );

// Get transaction
app.get('/api/transactions',getApiTransaction );

app.get('/api/transaction/:id', getApiTransactionById )

// Put transaction
app.put('/api/transaction/:id', putApiTransaction);

// Delete transaction
app.delete('/api/transaction/:id', deleteApiTransaction );

// // Get/transactions/user/:id
app.get('/api/transactions/user/:id', getApiTransactionUserById )

// Post signup
app.post('/api/signup', postApiSignup );

// Post login
app.post('/api/login', postApiLogin )

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});