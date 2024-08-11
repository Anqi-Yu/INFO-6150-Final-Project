var menuItemsUrl = 'path_to_your_menu_items_data'; // 替换为实际的菜单数据源URL
var menu = document.getElementById('menu');
var orderList = document.getElementById('order-list');

async function loadMenu() {
    try {
        let response = await fetch(menuItemsUrl);
        let items = await response.json();
        
        items.forEach(item => {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            let image = document.createElement('img');
            image.src = item.image; // 假设每个菜品有一个图片链接

            let caption = document.createElement('span');
            caption.textContent = `${item.name}, ${item.description}`;

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = item.name;
            checkbox.onclick = () => addToOrder(item.name);

            itemDiv.appendChild(image);
            itemDiv.appendChild(caption);
            itemDiv.appendChild(checkbox);
            menu.appendChild(itemDiv);
        });
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

function addToOrder(itemName) {
    let orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    orderList.appendChild(orderItem);
}

function placeOrder() {
    alert("Order placed successfully!");
    orderList.innerHTML = ''; // 清空订单列表
}

loadMenu();
