const username = localStorage.getItem('vishal_local');
const userInfo = document.getElementById('userInfo');
const messageDiv = document.getElementById('message');
const form = document.getElementById('withdrawalForm');

if (username) {
    userInfo.innerHTML = `<p>Logged in as: <strong>${username}</strong></p>`;
} else {
    alert('Please login first!');
    userInfo.innerHTML = '<p style="color: red;">Please login first!</p>';
    form.style.display = 'none';
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const withdrawalAmount = parseFloat(document.getElementById('amount').value);
    
    if (withdrawalAmount < 1) {
        showMessage('error', 'Please enter a valid amount greater than 0');
        return;
    }

    const data = {
        action: 'withdraw',
        username: username,
        upiId: document.getElementById('upiId').value,
        amount: withdrawalAmount,
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx0h0ukrew6mhtBFV0ScVZXfkO32TcfDiImxzXAWCsFD-lLvdi8ELbCcD-XMstV2k4S/exec', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        showMessage('success', 'Withdrawal Request Is Send ( Note : If You Fill Wrong Details Then Refund Not Approved ).');

        form.reset();

    } 
    catch (error) {
        showMessage('error', 'Error submitting request. Please try again.');
        console.error('Error:', error);
    }
});

function showMessage(type, message) {
    messageDiv.classList.remove('success', 'error');
    messageDiv.classList.add(type);
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
}
const username = localStorage.getItem('vishal_local');
const userInfo = document.getElementById('userInfo');
const messageDiv = document.getElementById('message');
const form = document.getElementById('withdrawalForm');

if (username) {
    userInfo.innerHTML = `<p>Logged in as: <strong>${username}</strong></p>`;
} else {
    alert('Please login first!');
    userInfo.innerHTML = '<p style="color: red;">Please login first!</p>';
    form.style.display = 'none';
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const withdrawalAmount = parseFloat(document.getElementById('amount').value);
    
    if (withdrawalAmount < 1) {
        showMessage('error', 'Please enter a valid amount greater than 0');
        return;
    }

    const data = {
        action: 'withdraw',
        username: username,
        upiId: document.getElementById('upiId').value,
        amount: withdrawalAmount,
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx0h0ukrew6mhtBFV0ScVZXfkO32TcfDiImxzXAWCsFD-lLvdi8ELbCcD-XMstV2k4S/exec', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        showMessage('success', 'Withdrawal Request Is Send ( Note : If You Fill Wrong Details Then Refund Not Approved ).');

        form.reset();

    } 
    catch (error) {
        showMessage('error', 'Error submitting request. Please try again.');
        console.error('Error:', error);
    }
});

function showMessage(type, message) {
    messageDiv.classList.remove('success', 'error');
    messageDiv.classList.add(type);
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
}
