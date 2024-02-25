document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const agree = document.getElementById("agree").checked;
  
      // Example: Perform validation checks
      if (agree) {
        // Example: Send signup data to the server
        console.log("Signup data:", { username, email, password });
        alert("Signup successful!");
      } else {
        showError("Please agree to the terms and conditions.");
      }
    });
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const loginEmail = document.getElementById("login-email").value;
      const loginPassword = document.getElementById("login-password").value;
  
      // Example: Send login data to the server for authentication
      console.log("Login data:", { email: loginEmail, password: loginPassword });
      alert("Login successful!");
    });
  
    function showError(message) {
      const errorMessage = document.createElement("p");
      errorMessage.id = "error-message";
      errorMessage.textContent = message;
      signupForm.appendChild(errorMessage);
    }
  });
  