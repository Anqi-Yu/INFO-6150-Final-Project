const Customer = require('../models/Customer');

// 注册新客户
exports.registerCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ message: 'Error registering new customer', error });
    }
};

// 获取客户信息
exports.getCustomerInfo = async (req, res) => {
    try {
        const customer = await Customer.findOne({
            email: req.query.email
        });
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer info', error });
    }
};
