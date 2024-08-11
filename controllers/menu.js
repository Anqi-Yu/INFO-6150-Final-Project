const MenuItem = require('../models/MenuItem');

// 获取菜单项
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({});
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu items', error });
    }
};

// 添加菜单项
exports.addMenuItem = async (req, res) => {
    try {
        const newMenuItem = new MenuItem(req.body);
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (error) {
        res.status(400).json({ message: 'Error adding menu item', error });
    }
};

// 删除菜单项
exports.deleteMenuItem = async (req, res) => {
    try {
        const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (deletedMenuItem) {
            res.status(200).json({ message: 'Menu item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Menu item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting menu item', error });
    }
};
