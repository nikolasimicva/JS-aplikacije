import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Book = new Schema({
    naziv: {
        type: String
    },
    strane: {
        type: Number
    },
    pisac: {
        type: String
    },
    komentari: {
        type: Array
    }
})

export default mongoose.model('Book', Book, 'knjige')