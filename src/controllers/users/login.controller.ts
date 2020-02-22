interface responsePayload {
    status: number,
    data: Object
}

export function authenticatingUsers(reqPayload: any) {
    let responsePayload: responsePayload;


    if (reqPayload.userEmail === 'admin@harvestcraft.com' && reqPayload.userPassword === 'hc@123') {
        responsePayload = {
            "status": 200,
            "data": {
                "token": {
                    "value": "sk_test_4eC39Hq-_test_4C9HqLyjWDarjtT-1zdp7dcLyjWDa-rjtT1zdp7d",
                    "expiredAfter": "2020-02-03T23:09:04.431Z"
                },
                "user_id": 167,
                "user_name": "jone",
                "role": "admin"
            }
        }
        return responsePayload;
    } else {
        responsePayload = {
            "status": 412,
            "data": {
                "message": "invalid credentials."
            }
        }
        return responsePayload;
    }
}