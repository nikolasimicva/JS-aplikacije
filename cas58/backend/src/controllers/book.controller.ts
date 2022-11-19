import express from 'express'
import Book from '../models/book';

export class BookController{
    getBooksByUser = (req: express.Request, res: express.Response)=>{
        //let pisac=req.body.pisac;
        let pisac = req.params.pisac;

        Book.find({'pisac': pisac}, (err, knjige)=>{
            if(err) console.log(err);
            else res.json(knjige);
        })
    }    

    searchBooksByName = (req: express.Request, res: express.Response)=>{
        let name = req.body.name;

        Book.find({'naziv': {$regex: name}}, (err, books)=>{
            if(err) console.log(err);
            else res.json(books);
        })
    }

    addComment = (req: express.Request, res: express.Response)=>{
        let naziv = req.body.bookName;
        let komentar = req.body.comment;

        console.log(naziv);

        let objKom = {
            tekst: komentar
        }

        Book.collection.updateOne({'naziv': naziv}, {$push: {'komentari': objKom}});
        res.json({'message': 'ok'});
    }

    addBook = (req: express.Request, res: express.Response)=>{
        //let book = new Book(req.body);
        let book = new Book({naziv: req.body.naziv, strane: req.body.strane,
        pisac: req.body.pisac, komentari: req.body.komentari});

        book.save().then((book)=>{
            res.json({'message': 'book added'})
        }).catch((err)=>{
            res.json({'message': 'error'})
        })
    }
}