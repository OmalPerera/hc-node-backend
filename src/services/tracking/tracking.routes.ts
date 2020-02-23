import { Request, Response } from "express";

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
                    "recipientAddress": "xELSTERS GATE 15,3043 DRAMMEN",
                    "recipientPosition": 8,
                    "routeId": 673
                }
            }

            res.status(responsePayload.status).json(
                responsePayload
            );

        }
    }

];