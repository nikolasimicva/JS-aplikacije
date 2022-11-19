import express from 'express';
import { OrderController } from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.route('/addOrder').post(
    (req, res) => new OrderController().addOrder(req, res)
)

orderRouter.route('/getAllOrdersByUser').post(
    (req, res)=> new OrderController().getAllOrdersByUser(req, res)
)

orderRouter.route('/cancelOrder').post(
    (req, res) => new OrderController().cancelOrder(req, res)
)

orderRouter.route('/getAllOrders').get(
    (req, res)=> new OrderController().getAllOrders(req, res)
)

orderRouter.route('/approveOrder').post(
    (req, res)=> new OrderController().approveOrder(req, res)
)

export default orderRouter;