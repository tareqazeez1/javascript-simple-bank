// Login page funtions


document.getElementById('login-button').addEventListener('click', function () {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value;
    if (emailValue == 'test@gmail.com' && passwordValue == '1234') {
        window.location.href = 'banking.html';
    }
    else {
        const errorText = document.getElementById('error');
        errorText.style.color = 'red';
        errorText.innerText = 'Invalid email or password!'
    }
}) 