document.addEventListener('DOMContentLoaded', function() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function() {
        // Navigate to the home.html page

        if(username == "Test" && password == "Test")
        {
            window.location.href = 'Home.html';
        }else{
            console.log("NOT VALID USER NAME:)");
        }
    });
});
