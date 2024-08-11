const express = require('express');
const router = express.Router();
const { getMenuItems, addMenuItem, deleteMenuItem } = require('../controllers/menu');

router.get('/', getMenuItems);
router.post('/', addMenuItem);
router.delete('/:id', deleteMenuItem);

module.exports = router;
