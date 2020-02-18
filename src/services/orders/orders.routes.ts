import { Request, Response } from "express";

export default [
    {
        path: "/order/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello Orders!");
        }
    },
    {
        path: "/order/msg",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Handling GET requests to /Orders'
            });
        }
    },
    {
        path: "/order/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const product = {
                name: req.body.name,
                price: req.body.price
            }
            res.status(200).json({
                message: 'Handling POST requests to /Orders' + product.name + ' --> ' + product.price
            });
        }
    },

];