const express = require('express');
const router = express.Router();
const { registerCustomer, getCustomerInfo } = require('../controllers/customers');

router.post('/', registerCustomer);
router.get('/', getCustomerInfo);

module.exports = router;
