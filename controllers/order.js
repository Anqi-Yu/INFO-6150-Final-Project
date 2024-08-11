const Order = require('../models/Order');

// 创建订单
exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            items: req.body.items,  // Assumes an array of MenuItem IDs
            customer: req.body.customer  // Assumes a Customer ID
        });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: 'Error creating order', error });
    }
};

// 获取订单详情
exports.getOrderDetails = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items').populate('customer');
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order details', error });
    }
};
