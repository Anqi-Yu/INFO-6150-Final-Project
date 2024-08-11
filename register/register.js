document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Registration Successful!');
            this.reset();  // Reset form after successful registration
        } else {
            const errorData = await response.json();
            alert('Registration Failed: ' + errorData.message);
        }
    } catch (error) {
        console.error('Failed to register:', error);
        alert('Registration Failed: ' + error.message);
    }
});
