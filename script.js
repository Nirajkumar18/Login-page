const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateLoginForm);

function validateLoginForm(event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePassword(password.value)) {
        alert('Please enter a valid password.');
        return;
    }

    alert('Login successful!');
}