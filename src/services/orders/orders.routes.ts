import { Request, Response } from "express";
import { processOrderSummary } from "../../controllers/orders/order-summary.controller";

export default [
    {
        path: "/order/getordersummarylist/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const requestPayload = {
                userToken: req.body.userToken,
                userId: req.body.userId
            }
            const responsePayload = processOrderSummary(requestPayload);

            res.status(responsePayload.status).json(
                responsePayload
            );
        }
    },



    {
        path: "/order/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello Orders!");
        }
    }

];