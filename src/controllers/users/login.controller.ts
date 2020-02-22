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
                "user_id": 1,
                "user_name": "Jone Ad",
                "role": "admin"
            }
        }
        return responsePayload;
    }
    else if (reqPayload.userEmail === 'driver@harvestcraft.com' && reqPayload.userPassword === 'hc@123') {
        responsePayload = {
            "status": 200,
            "data": {
                "token": {
                    "value": "sk_test_4eC39Hq-_test_4C9HqLyarjtT-1zdp7dcLyjWDa-rjtT1zdp7d",
                    "expiredAfter": "2020-03-03T23:09:04.431Z"
                },
                "user_id": 2,
                "user_name": "Thomas Dri",
                "role": "driver"
            }
        }
        return responsePayload;
    }
    else if (reqPayload.userEmail === 'store@harvestcraft.com' && reqPayload.userPassword === 'hc@123') {
        responsePayload = {
            "status": 200,
            "data": {
                "token": {
                    "value": "sk_test_4C39Hq-_test_4C9HqLyarjtT-1zdp7dcyjWDa-rjtT1zdp7d",
                    "expiredAfter": "2020-03-03T23:09:04.431Z"
                },
                "user_id": 3,
                "user_name": "Kathrine Sm",
                "role": "storemanager"
            }
        }
        return responsePayload;
    }
    else {
        responsePayload = {
            "status": 412,
            "data": {
                "message": "invalid credentials."
            }
        }
        return responsePayload;
    }
}