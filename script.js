// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the form element
    const form = document.querySelector("form");
  
    // Add an event listener for the form submission
    form.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the selected query from the form
      const query = document.querySelector("#help").value;
  
      // Get the description from the form
      const description = document.querySelector("#Brief").value;
  
      // Display a success message
      const successMessage = `Thank you for your ${query} feedback! We will get back to you as soon as possible.`;
      document.querySelector("#message").textContent = successMessage;
  
      // Clear the form inputs
      form.reset();
    });
  
  });
  