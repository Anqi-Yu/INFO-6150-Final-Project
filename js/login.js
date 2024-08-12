document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // 发送到服务器进行验证
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, phoneNumber })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 登录成功，重定向到订单历史页面
            window.location.href = `order-history.html?userId=${userId}`;
        } else {
            alert('Login failed. Please check your user ID or phone number.');
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
});
