import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Order = new Schema(
    {
        knjiga: {
            type: String
        },
        kolicina: {
            type: Number
        },
        kupac: {
            type: String
        },
        status: {
            type: String
        }
    }
)

export default mongoose.model('Order', Order, 'narudzbine');