interface IrequestPayload {
    userToken: string,
    userId: number,
    orderId: number
}

interface IresponsePayload {
    status: number,
    data: Object
}

export function processOrderDetails(reqPayload: IrequestPayload) {
    try {
        let responsePayload: IresponsePayload;

        if (reqPayload.userToken && reqPayload.userId && reqPayload.orderId) {
            responsePayload = {
                "status": 200,
                "data": {
                    "orderId": 1,
                    "orderNumber": "hc0088",
                    "orderStatus": "pending",
                    "recipientName": "Miss. Kathryn Mckinney",
                    "recipientMobileNumber": "+94794638639",
                    "numberOfItems": 7,
                    "deliveryTime": "2020-02-08T11: 14: 42.273Z",
                    "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States",
                    "totalPurchasedWeightInKg": 10,
                    "purchaseDate": "2020-02-06T10: 12: 12.273Z",
                    "orderPrice": 480,
                    "assignedDriverName": "Zoraide Barbosa",
                    "assignedDriverMobileNumber": "+94776534937",
                    "isSecondaryRecipientAssigned": true,
                    "secondaryRecipientName": "Barbocia Katryn",
                    "secondaryRecipientMobileNumber": "+94719934557"
                }
            }
            return responsePayload;
        }
        else {
            responsePayload = {
                "status": 412,
                "data": {
                    "message": "invalid parameters."
                }
            }
            return responsePayload;
        }
    } catch (e) {
        const responsePayload = {
            "status": 401,
            "data": {
                "message": "e"
            }
        }
        return responsePayload;
    }
}