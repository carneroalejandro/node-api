import mongoose from 'mongoose';
import { ItemSchema } from '../models/apiModel';

const Item = mongoose.model('Item', ItemSchema);

export const addNewItem = (req, res) => {
    let newItem = new Item(req.body);

    newItem.save((err, item) => {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};

export const getItems = (req, res) => {
    Item.find({}, (err, item) => {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};


export const getItemWithID = (req, res) => {
    Item.findById(req.params.itemId, (err, item) => {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
}

export const updateItem = (req, res) => {
    Item.findOneAndUpdate({ _id: req.params.itemId}, req.body, { new: true }, (err, item) => {
        if (err) {
            res.send(err);
        }
        res.json(item);
    })
}

export const deleteItem = (req, res) => {
    Item.remove({ _id: req.params.itemtId }, (err, item) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Item borrado'});
    })
}