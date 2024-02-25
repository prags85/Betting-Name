document.addEventListener("DOMContentLoaded", function() {
    // Example: Collecting the pot amount from the server
    const potAmount = 5000; // Assume the pot amount is fetched from the server
  
    const collectivePot = document.getElementById("collective-pot");
    collectivePot.textContent = "Rs " + potAmount.toLocaleString(); // Format pot amount with commas
  });
  