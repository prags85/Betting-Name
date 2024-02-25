document.addEventListener("DOMContentLoaded", function() {
    const accountSettingsForm = document.getElementById("account-settings-form");
    const emailNotificationsCheckbox = document.getElementById("email-notifications");
    const publicProfileCheckbox = document.getElementById("public-profile");
  
    // Example: Save account settings
    accountSettingsForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
  
      // Example: Send updated account settings to server
      console.log("Updated account settings:", { username, email });
      alert("Account settings saved successfully!");
    });
  
    // Example: Update notification preferences
    emailNotificationsCheckbox.addEventListener("change", function() {
      const emailNotificationsEnabled = emailNotificationsCheckbox.checked;
      console.log("Email notifications enabled:", emailNotificationsEnabled);
    });
  
    // Example: Update privacy preferences
    publicProfileCheckbox.addEventListener("change", function() {
      const publicProfileEnabled = publicProfileCheckbox.checked;
      console.log("Public profile enabled:", publicProfileEnabled);
    });
  });
  