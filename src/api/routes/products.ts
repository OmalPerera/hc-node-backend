import * as express from "express";
const router = express.Router();

export const productRoutes = (app: express.Application) => {

    app.get('/', (req, res, next) => {
        res.status(200).json({
            message: 'Handling GET requests to /Products'
        });
    });

    app.post('/', (req, res, next) => {
        const product = {
            name: req.body.name,
            price: req.body.price
        }
        res.status(200).json({
            message: 'Handling POST requests to /Products' + product.name
        });
    });

    app.get('/:productId', (req, res, next) => {
        const id = req.params.productId;
        if (id === 'special') {
            res.status(200).json({
                message: 'you got special product',
                id
            });
        } else {
            res.status(200).json({
                message: 'you got normal product',
                message1: 'you passed an id'
            });
        }

    });

    app.patch('/:productId', (req, res, next) => {
        const id = req.params.productId;
        res.status(200).json({
            message: 'product updated'
        });


    });

}

