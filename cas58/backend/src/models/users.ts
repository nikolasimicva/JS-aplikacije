import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        korisnicko_ime: {
            type: String
        },
        lozinka: {
            type: String
        }
    }
)

export default mongoose.model('User', User, 'korisnici');