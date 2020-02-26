import { Request, Response } from "express";

let routeType: number = 0;

const driversPathLatLongExtended = [
    { lat: 58.048188, lng: 7.253526 },
    { lat: 58.022629, lng: 7.450369 },
    { lat: 58.025300, lng: 7.451530 },
    { lat: 58.028023, lng: 7.449081 },
    { lat: 58.025841, lng: 7.456009 },
    { lat: 58.024580, lng: 7.455296 },
    { lat: 58.025313, lng: 7.459480 },
    { lat: 58.028382, lng: 7.458472 },
    { lat: 58.032313, lng: 7.453271 },
    { lat: 58.033126, lng: 7.444721 },
    { lat: 58.028618, lng: 7.439736 }
]


const driversPathLatLong = [
    { lat: 58.037781, lng: 7.438677 },
    { lat: 58.036944, lng: 7.443371 },
    { lat: 58.036066, lng: 7.446738 },
    { lat: 58.034753, lng: 7.448610 },
    { lat: 58.033662, lng: 7.446818 },
    { lat: 58.032571, lng: 7.442870 },
    { lat: 58.030890, lng: 7.445069 },
    { lat: 58.029010, lng: 7.444940 },
    { lat: 58.027749, lng: 7.443899 },
    { lat: 58.028209, lng: 7.441710 },
    { lat: 58.028618, lng: 7.439736 }
]

export default [
    {
        path: "/tracking/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Tracking Endpoint \n send positonIndex: number parameter in body");
        }
    },
    {
        path: "/tracking/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const trackingDetails = {
                positonIndex: req.body.positonIndex,
            }

            if (routeType === 0) {
                res.status(200).json({
                    "status": 200,
                    "errors": [],
                    "validationResultErrors": [],
                    "errorKeys": [],
                    "data": {
                        'deliveryAcknowledgeCount': trackingDetails.positonIndex,
                        'latitude': driversPathLatLong[trackingDetails.positonIndex].lat,
                        'longitude': driversPathLatLong[trackingDetails.positonIndex].lng
                    }
                });
            } else {
                res.status(200).json({
                    "status": 200,
                    "errors": [],
                    "validationResultErrors": [],
                    "errorKeys": [],
                    "data": {
                        'deliveryAcknowledgeCount': trackingDetails.positonIndex,
                        'latitude': driversPathLatLongExtended[trackingDetails.positonIndex].lat,
                        'longitude': driversPathLatLongExtended[trackingDetails.positonIndex].lng
                    }
                });
            }
        }
    },
    {
        path: "/vehicles/initiatelivetracking/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const userDetails = {
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword
            }
            const responsePayload = {
                "status": 200,
                "errors": [],
                "validationResultErrors": [],
                "errorKeys": [],
                "data": {
                    "isTrackable": true,
                    "trackerID": 88,
                    "latitude": 58.028618,
                    "longitude": 7.439736,
                    "recipientAddress": "ELSTERS GATE 15,3043 DRAMMEN",
                    "recipientPosition": 8,
                    "routeId": 673
                }
            }

            res.status(responsePayload.status).json(
                responsePayload
            );

        }
    },
    {
        path: "/vehicles/changeDriverPath/",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const reqDetails = {
                pathType: req.body.type
            }

            routeType = reqDetails.pathType;
            const responsePayload = {
                "status": 200
            }

            res.status(responsePayload.status).json(
                responsePayload
            );

        }
    }

];