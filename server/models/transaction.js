import {Schema, model} from "mongoose";
const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    }

})