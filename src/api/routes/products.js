const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({
        message: 'Handling GET requests to /Products'
    });
});

router.post('/', function (req, res, next) {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: 'Handling POST requests to /Products' + product.name
    });
});

router.get('/:productId', function (req, res, next) {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you got special product',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you got normal product',
            message1: 'you passed an id'
        });
    }

});

router.patch('/:productId', function (req, res, next) {
    const id = req.params.productId;
    res.status(200).json({
        message: 'product updated'
    });


});


module.exports = router;
