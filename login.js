const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TO DO: Add your login logic here
    // For example, you can make an AJAX request to a server-side script
    // or use a library like Firebase to authenticate users

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
    } else {
        // If login is successful, redirect to a new page or show a success message
        errorMessage.textContent = 'Login successful!';
    }
});