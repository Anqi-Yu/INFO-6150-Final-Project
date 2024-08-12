document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    fetch(`/api/orders?userId=${userId}`)
        .then(response => response.json())
        .then(orders => {
            const orderHistory = document.getElementById('orderHistory');
            if (orders.length > 0) {
                orders.forEach(order => {
                    const orderDiv = document.createElement('div');
                    orderDiv.className = 'order-item';
                    orderDiv.innerHTML = `
                        <h3>Order ID: ${order.id}</h3>
                        <p>Date: ${order.date}</p>
                        <p>Items: ${order.items.join(', ')}</p>
                        <p>Total: $${order.total}</p>
                    `;
                    orderHistory.appendChild(orderDiv);
                });
            } else {
                orderHistory.innerHTML = '<p>No order history found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching order history:', error);
            document.getElementById('orderHistory').innerHTML = '<p>Failed to load order history.</p>';
        });
});
