import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a item name'
    },
    type: {
        type: String,
        required: 'Enter item type'
    },
    notes: {
        type: String
    },
    stock: {
        type: Number,
        required: 'Enter the stock'
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});