
// Get the modal
var modal = document.getElementById("signup-modal");

// Get the button that opens the modal
var signupBtn = document.getElementById("signup-btn");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close-btn");

// Get the "Go to Home" button inside the modal
var goHomeBtn = document.querySelector(".go-home-btn");

// Open the modal when the "Login" button is clicked
signupBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Close the modal when the user clicks on <span> (x)
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Redirect to the home page when the "Go to Home" button is clicked
goHomeBtn.addEventListener("click", function () {
    window.location.href = "index.html"; // Redirect to home page
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
