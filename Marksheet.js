document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('logout-button');

    loginButton.addEventListener('click', function() {
        // Navigate to the home.html page
        window.location.href = 'index.html';
    });

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click',function(){
        console.log("login");
    //     const testName = document.getElementById("testName").value;
    //     const marks = document.getElementById("marks").value;
    //     const improvement = document.getElementById("improvement").value;
    
    //     const newRowHtml = `
    //       <tr>
    //         <td colspan="2">${testName}</td>
    //         <td colspan="2">${marks}</td>
    //         <td colspan="2">${improvement}</td>
    //       </tr>
    //     `;
    
    //     const tbody = document.querySelector("table .tbody");
    //     tbody.insertAdjacentHTML("beforeend", newRowHtml);
    
    //     // Clear the form inputs
    //     document.getElementById("testName").value = "";
    //     document.getElementById("marks").value = "";
    //     document.getElementById("improvement").value = "";
    });
});

  /*
   const isAdmin = true; // Replace with your logic to determine if admin is logged in

            // Enable the form if admin is logged in
            if (isAdmin) {
              const addRowForm = document.getElementById("addRowForm");
              addRowForm.style.display = "block";
            }
  */
