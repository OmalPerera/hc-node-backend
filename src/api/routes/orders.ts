import express from "express";
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were created'
    });
});

router.patch('/:OrderId', (req, res, next) => {
    const id = req.params.OrderId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you got special Order',
            id
        });
    } else {
        res.status(200).json({
            message: 'you got normal Order',
            message1: 'you passed an id'
        });
    }

});


module.exports = router;
