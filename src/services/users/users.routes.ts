import { Request, Response } from "express";

export default [

    {
        path: "/user/login/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            let data = {}
            const userDetails = {
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword
            }
            if (userDetails.userEmail === 'admin@harverstcraft.com' && userDetails.userPassword === 'hc@123') {
                data = {
                    "token": {
                        "value": "sk_test_4eC39Hq-_test_4C9HqLyjWDarjtT-1zdp7dcLyjWDa-rjtT1zdp7d",
                        "expiredAfter": "2020-02-03T23:09:04.431Z"
                    },
                    "user_id": 167,
                    "user_name": "jone",
                    "role": "admin"
                }
                res.status(200).json({
                    data
                });
            }
            else {
                data = {
                    "message": "invalid credentials."
                }
                res.status(412).json({
                    data
                });
            }

        }
    }
]