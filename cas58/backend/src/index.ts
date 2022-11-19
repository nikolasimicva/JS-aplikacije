import express from 'express';
import userRouter from './routes/user.routes';
import mongoose from 'mongoose'
import cors from 'cors';
import bodyParser from 'body-parser';
import bookRouter from './routes/book.routes';
import orderRouter from './routes/order.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.listen(4000, ()=> console.log('Listening'));

mongoose.connect('mongodb://localhost:27017/bazajs');
const conn = mongoose.connection;
conn.once('open', ()=>{
    console.log('mongo conn open')
})

const router  = express.Router();

router.route('/').get(
    (req, res)=> res.send("Hello")
)

router.use('/users', userRouter)
router.use('/books', bookRouter)
router.use('/orders', orderRouter)

app.use('/', router);