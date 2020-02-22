import { Request, Response } from "express";
import { authenticatingUsers } from "../../controllers/users/login.controller";

export default [

    {
        path: "/user/login/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const userDetails = {
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword
            }
            const responsePayload = authenticatingUsers(userDetails);

            res.status(responsePayload.status).json(
                responsePayload
            );


        }
    }
]