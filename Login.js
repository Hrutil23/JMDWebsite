document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function() {
        // Navigate to the home.html page
        window.location.href = '/Home.html';
    });
});