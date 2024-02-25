document.addEventListener("DOMContentLoaded", function() {
    const paymentForm = document.getElementById("payment-form");
    const paymentStatus = document.getElementById("payment-status");
  
    paymentForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const cardNumber = document.getElementById("card-number").value;
      const expiryDate = document.getElementById("expiry-date").value;
      const cvv = document.getElementById("cvv").value;
      const amount = parseInt(document.getElementById("amount").value);
  
      // Example: Perform payment processing
      if (cardNumber && expiryDate && cvv && amount >= 50) {
        // Simulate payment success
        paymentStatus.textContent = `Payment successful for Rs ${amount}`;
      } else {
        paymentStatus.textContent = "Invalid payment details or amount less than Rs 50";
      }
    });
  });
  