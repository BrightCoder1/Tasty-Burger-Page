const navbarToggle = document.getElementById("js-navbar-toggle");
const menu = document.getElementById("js-menu");

navbarToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Here, you can send the feedback data to a server using AJAX or fetch API
    // For demonstration purposes, we'll just log the feedback data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, you can display a success message or clear the form fields
    alert("Feedback submitted successfully!");
    document.getElementById("feedbackForm").reset();
  });
