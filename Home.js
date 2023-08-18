document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('logout-button');

    loginButton.addEventListener('click', function() {
        // Navigate to the home.html page
        window.location.href = 'Login/Login.html';
    });
});