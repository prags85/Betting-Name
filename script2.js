document.addEventListener("DOMContentLoaded", function() {
    const bettingForm = document.getElementById("betting-form");
    const betStatus = document.getElementById("bet-status");
  
    bettingForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const selectedTeam = document.getElementById("team-select").value;
      const betAmount = parseInt(document.getElementById("bet-amount").value);
  
      // Example: Perform validation and send bet to server
      if (betAmount >= 50) {
        // Simulate bet placement
        betStatus.textContent = `Bet placed on ${selectedTeam} for Rs ${betAmount}`;
      } else {
        betStatus.textContent = "Minimum bet amount is Rs 50";
      }
    });
  });
  