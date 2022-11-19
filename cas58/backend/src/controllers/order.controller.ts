import express from 'express'
import { Expression } from 'typescript';
import Order from '../models/order'

export class OrderController{
    addOrder = (req: express.Request, res: express.Response)=>{
        Order.findOne({'kupac': req.body.kupac, 'knjiga': req.body.knjiga}, 
        (err, order)=>{
            if(err) console.log(err);
            else{
                if(order==null){
                    //treba da dodam order
                    let order = new Order(req.body);

                    order.save().then((order)=>{
                        res.json({'message': 'order added'})
                    }).catch((err)=>{
                        res.json({'message': 'error'})
                    })
                }
                else{
                    res.json({'message': 'order exists'})
                }
            }
        })

        
    }

    getAllOrdersByUser=(req: express.Request, res: express.Response)=>{
        let user = req.body.korisnicko_ime;

        Order.find({'kupac': user}, (err, orders)=>{
            if(err) console.log(err);
            else res.json(orders);
        })
    }

    cancelOrder = (req: express.Request, res: express.Response)=>{
        let kupac = req.body.kupac;
        let knjiga = req.body.knjiga;

        Order.collection.deleteOne({'kupac': kupac, 'knjiga': knjiga}, (err, knjiga)=>{
            if(err) console.log(err);
            else {
                res.json({'message': 'order deleted'})
            }
        })

    }

    getAllOrders=(req: express.Request, res: express.Response)=>{
        Order.find({}, (err, orders)=>{
            if(err) console.log(err);
            else res.json(orders);
        })
    }

    approveOrder=(req: express.Request, res: express.Response)=>{
        let kupac=req.body.kupac;
        let knjiga = req.body.knjiga;

        Order.collection.updateOne({'kupac': kupac, 'knjiga': knjiga},
        {$set: {'status': 'odobreno'}});
        res.json({'message': 'ok'})
    }
}