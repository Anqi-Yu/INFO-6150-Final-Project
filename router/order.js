const express = require('express');
const router = express.Router();
const { createOrder, getOrderDetails } = require('../controllers/orders');

router.post('/', createOrder);
router.get('/:id', getOrderDetails);

module.exports = router;
