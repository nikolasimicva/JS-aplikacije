import express from 'express';
import { BookController } from '../controllers/book.controller';

const bookRouter = express.Router();

/*bookRouter.route('/getBooksByUser').post(
    (req, res) => new BookController().getBooksByUser(req, res)
)*/

bookRouter.route('/getBooksByUser/:pisac').get(
    (req, res) => new BookController().getBooksByUser(req, res)
)

bookRouter.route('/searchBooksByName').post(
    (req, res) => new BookController().searchBooksByName(req, res)
)

bookRouter.route('/addComment').post(
    (req, res)=> new BookController().addComment(req, res)
)

bookRouter.route('/addBook').post(
    (req, res)=>new BookController().addBook(req, res)
)

export default bookRouter;