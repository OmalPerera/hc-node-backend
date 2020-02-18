import express from "express";
const router = express.Router();

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
]

router.post('/', (req, res, next) => {
    const trackingDetails = {
        positonIndex: req.body.positonIndex,
    }
    res.status(200).json({
        data: driversPathLatLong[trackingDetails.positonIndex]
    });
});