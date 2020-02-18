import { Request, Response } from "express";

export default [
    {
        path: "/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello world!");
        }
    },
    {
        path: "/msg",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Handling GET requests to /Products'
            });
        }
    },
    {
        path: "/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const product = {
                name: req.body.name,
                price: req.body.price
            }
            res.status(200).json({
                message: 'Handling POST requests to /Products' + product.name + ' --> ' + product.price
            });
        }
    },

];