document.addEventListener("DOMContentLoaded", function() {
    // Assuming competitions are fetched from an API
    const competitions = [
      { name: "Competition 1", teams: ["Team A", "Team B"], odds: "2.5" },
      { name: "Competition 2", teams: ["Team C", "Team D"], odds: "3.0" },
      { name: "Competition 3", teams: ["Team E", "Team F"], odds: "1.8" }
    ];
  
    const competitionList = document.getElementById("competition-list");
  
    // Populate competitions
    competitions.forEach(function(competition) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h3>${competition.name}</h3>
        <p>Teams: ${competition.teams.join(', ')}</p>
        <p>Odds: ${competition.odds}</p>
      `;
      competitionList.appendChild(listItem);
    });
  });
  