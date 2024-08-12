document.addEventListener('DOMContentLoaded', function() {
    const menu = [
        { name: 'Spaghetti Bolognese', price: 12, image: 'spaghetti.jpg' },
        { name: 'Caesar Salad', price: 8, image: 'caesar_salad.jpg' },
        { name: 'Grilled Chicken', price: 15, image: 'grilled_chicken.jpg' },
        { name: 'Mushroom Soup', price: 7, image: 'mushroom_soup.jpg' },
        { name: 'Tiramisu', price: 6, image: 'tiramisu.jpg' },
        { name: 'Cheesecake', price: 6, image: 'cheesecake.jpg' }
        // 继续添加其他菜品
    ];

    const menuContainer = document.getElementById('menu');
    const orderList = document.getElementById('orderList');
    let order = [];

    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const img = document.createElement('img');
        img.src = `images/${item.image}`;
        img.alt = item.name;
        img.className = 'menu-image';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item.name;
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                order.push(item);
            } else {
                order = order.filter(orderItem => orderItem.name !== item.name);
            }
            updateOrderList();
        });

        const label = document.createElement('label');
        label.textContent = `${item.name} - $${item.price}`;

        menuItem.appendChild(img);
        menuItem.appendChild(checkbox);
        menuItem.appendChild(label);
        menuContainer.appendChild(menuItem);
    });

    function updateOrderList() {
        orderList.innerHTML = '';
        order.forEach(item => {
            const orderItem = document.createElement('li');
            orderItem.textContent = `${item.name} - $${item.price}`;
            orderList.appendChild(orderItem);
        });
    }

    document.getElementById('placeOrderBtn').addEventListener('click', function () {
        if (order.length > 0) {
            alert('Your order has been placed: ' + order.map(item => item.name).join(', '));
            order = [];
            updateOrderList();
        } else {
            alert('Please add items to your order.');
        }
    });

    // 文件系统访问 API
    document.getElementById('openFile').addEventListener('click', async () => {
        try {
            const [fileHandle] = await window.showOpenFilePicker();
            const file = await fileHandle.getFile();
            const content = await file.text();
            document.getElementById('fileContent').textContent = content;
        } catch (err) {
            console.error(err);
        }
    });

    // 通知 API
    document.getElementById('notifyUser').addEventListener('click', () => {
        if (Notification.permission === "granted") {
            new Notification("Order Placed!", {
                body: "Your order has been placed successfully.",
                icon: "icon.png"  // 你可以设置一个图标文件
            });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("Order Placed!", {
                        body: "Your order has been placed successfully.",
                        icon: "icon.png"
                    });
                }
            });
        }
    });
});
