document.addEventListener("DOMContentLoaded", function() {
    // Example data (replace with actual user data if available)
    const userData = {
      username: "John Doe",
      bettingHistory: ["Bet 1", "Bet 2", "Bet 3"],
      wins: 5,
      losses: 3,
      balance: 1000
    };
  
    const usernameElem = document.getElementById("username");
    const bettingHistoryElem = document.getElementById("betting-history");
    const winsElem = document.getElementById("wins");
    const lossesElem = document.getElementById("losses");
    const balanceElem = document.getElementById("balance");
    const editProfileBtn = document.getElementById("edit-profile-btn");
  
    // Populate user profile data
    usernameElem.textContent = userData.username;
    userData.bettingHistory.forEach(function(bet) {
      const li = document.createElement("li");
      li.textContent = bet;
      bettingHistoryElem.appendChild(li);
    });
    winsElem.textContent = userData.wins;
    lossesElem.textContent = userData.losses;
    balanceElem.textContent = userData.balance;
  
    // Event listener for edit profile button (example action)
    editProfileBtn.addEventListener("click", function() {
      alert("Edit profile feature is not implemented yet.");
    });
  });
  