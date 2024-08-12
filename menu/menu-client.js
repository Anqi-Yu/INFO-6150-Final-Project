document.addEventListener('DOMContentLoaded', function() {
    const menu = {
        "appetizers": [
            { "name": "Bruschetta", "price": 5, "image": "bruschetta.jpg" },
            { "name": "Stuffed Mushrooms", "price": 6, "image": "stuffed_mushrooms.jpg" },
            { "name": "Caprese Salad", "price": 7, "image": "caprese_salad.jpg" },
            { "name": "Garlic Bread", "price": 4, "image": "garlic_bread.jpg" },
            { "name": "Shrimp Cocktail", "price": 8, "image": "shrimp_cocktail.jpg" }
        ],
        "entrees": [
            { "name": "Grilled Salmon", "price": 15, "image": "grilled_salmon.jpg" },
            { "name": "Spaghetti Carbonara", "price": 12, "image": "spaghetti_carbonara.jpg" },
            { "name": "Chicken Parmesan", "price": 14, "image": "chicken_parmesan.jpg" },
            { "name": "Beef Wellington", "price": 20, "image": "beef_wellington.jpg" },
            { "name": "Vegetarian Lasagna", "price": 13, "image": "vegetarian_lasagna.jpg" }
        ],
        "desserts": [
            { "name": "Cheesecake", "price": 6, "image": "cheesecake.jpg" },
            { "name": "Tiramisu", "price": 7, "image": "tiramisu.jpg" },
            { "name": "Chocolate Lava Cake", "price": 8, "image": "chocolate_lava_cake.jpg" },
            { "name": "Apple Pie", "price": 5, "image": "apple_pie.jpg" },
            { "name": "Panna Cotta", "price": 6, "image": "panna_cotta.jpg" }
        ],
        "drinks": [
            { "name": "Mojito", "price": 5, "image": "mojito.jpg" },
            { "name": "Iced Tea", "price": 3, "image": "iced_tea.jpg" },
            { "name": "Lemonade", "price": 4, "image": "lemonade.jpg" },
            { "name": "Cappuccino", "price": 4, "image": "cappuccino.jpg" },
            { "name": "Margarita", "price": 7, "image": "margarita.jpg" }
        ]
    };

    const menuContainer = document.getElementById('menu');
    const orderList = document.getElementById('orderList');
    let order = [];

    function addMenuItems(category, items) {
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        menuContainer.appendChild(categoryTitle);

        items.forEach(item => {
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
    }

    // 加载所有类别的菜单项
    addMenuItems('Appetizers', menu.appetizers);
    addMenuItems('Entrees', menu.entrees);
    addMenuItems('Desserts', menu.desserts);
    addMenuItems('Drinks', menu.drinks);

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
