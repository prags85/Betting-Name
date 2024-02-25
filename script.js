// script.js
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simulate authentication (replace with actual authentication logic)
    if (username === "user" && password === "password") {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("bettingForm").style.display = "block";
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password";
    }
  }
  
  function placeBet() {
    var team = document.getElementById("teams").value;
    var betAmount = parseFloat(document.getElementById("betAmount").value);
  
    // Simulate betting (replace with actual betting logic)
    if (!isNaN(betAmount) && betAmount >= 50) {
      // Process the bet
      document.getElementById("bettingMessage").innerText = "Bet placed successfully";
    } else {
      document.getElementById("bettingMessage").innerText = "Invalid bet amount (minimum Rs 50)";
    }
  }
  