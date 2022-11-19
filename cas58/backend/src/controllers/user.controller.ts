import express from 'express'
import User from '../models/users'

export class UserController{
    login = (req: express.Request, res: express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime;
        let lozinka = req.body.lozinka;

        User.findOne({"korisnicko_ime": korisnicko_ime,
         "lozinka": lozinka}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }

    register = (req: express.Request, res: express.Response)=>{
        let newUser = new User(req.body);

        newUser.save().then((newUser)=>{
            res.json({'message': 'ok'});
        }).catch((err)=>{
            res.json({'message': 'not ok'});
        })
    }
}