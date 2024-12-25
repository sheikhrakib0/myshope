// modal script start 
// Get the modal
var modal = document.getElementById("add-to-cart-modal");

// Get the button that opens the modal
var addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close-btn");

// Get the buttons inside the modal
var continueShoppingBtn = document.querySelector(".continue-shopping-btn");
var viewCartBtn = document.querySelector(".view-cart-btn");

// Open the modal when any "Add to Cart" button is clicked
addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modal.style.display = "block";
    });
});

// Close the modal when the user clicks on <span> (x)
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when the user clicks on the "Continue Shopping" button
continueShoppingBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Optionally, you could link the "View Cart" button to your cart page
viewCartBtn.addEventListener("click", function () {
    window.location.href = "cart.html"; // Change this to your cart page URL
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
// modal script end 
