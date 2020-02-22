interface IrequestPayload {
    userToken: string,
    userId: number
}

interface IresponsePayload {
    status: number,
    data: Object
}

export function processOrderSummary(reqPayload: IrequestPayload) {
    try {
        let responsePayload: IresponsePayload;

        if (reqPayload.userToken && reqPayload.userId === 1) {
            responsePayload = {
                "status": 200,
                "data": {
                    "orderSummaryList": [
                        {
                            "orderId": 1,
                            "orderName": "HCOO199",
                            "status": "active",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 2,
                            "orderName": "HCOO2",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 4,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 3,
                            "orderName": "HCOO3",
                            "status": "pending",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 3,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 4,
                            "orderName": "HCOO4",
                            "status": "delivered",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 5,
                            "orderName": "HCOO5",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 6,
                            "orderName": "HCOO6",
                            "status": "active",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 7,
                            "orderName": "HCOO7",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 4,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 8,
                            "orderName": "HCOO8",
                            "status": "pending",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 3,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 9,
                            "orderName": "HCOO9",
                            "status": "delivered",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 10,
                            "orderName": "HCOO10",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        }
                    ]
                }
            }
            return responsePayload;
        }
        else if (reqPayload.userToken && reqPayload.userId === 2) {
            responsePayload = {
                "status": 200,
                "data": {
                    "orderSummaryList": [
                        {
                            "orderId": 1,
                            "orderName": "HCOO199",
                            "status": "active",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 2,
                            "orderName": "HCOO2",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 4,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 4,
                            "orderName": "HCOO4",
                            "status": "delivered",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 5,
                            "orderName": "HCOO5",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 6,
                            "orderName": "HCOO6",
                            "status": "active",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 7,
                            "orderName": "HCOO7",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 4,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 9,
                            "orderName": "HCOO9",
                            "status": "delivered",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        },
                        {
                            "orderId": 10,
                            "orderName": "HCOO10",
                            "status": "cancelled",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 Rolling Green Rd, Jackson, Kentucky 48144 United States"
                        }
                    ]
                }
            }
            return responsePayload;
        }
        else if (reqPayload.userToken && reqPayload.userId === 3) {
            responsePayload = {
                "status": 200,
                "data": {
                    "orderSummaryList": [
                        {
                            "orderId": 1,
                            "orderName": "HCOO199",
                            "status": "active",
                            "date": "2020-02-08T08:13:01.264Z",
                            "numberOfItems": 5,
                            "deliveryAdress": "4934 STORE MAN Green Rd, Jackson, Kentucky 48144 United States"
                        }
                    ]
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