// Simulating the cart with data stored in localStorage
// For demonstration, I'll use a sample cart object.
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the cart table
function renderCart() {
    const cartTableBody = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear existing cart items
    cartTableBody.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td><input type="number" class="quantity-input" value="${item.quantity}" data-index="${index}" min="1"></td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" data-index="${index}">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    // Update the total price in the summary
    cartTotal.textContent = totalPrice.toFixed(2);
}

// Function to update quantity
function updateQuantity(index, quantity) {
    if (quantity < 1) return; // Prevent negative quantity
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Add event listeners for quantity inputs and remove buttons
document.addEventListener('DOMContentLoaded', () => {
    renderCart();

    // Handle quantity change
    document.getElementById('cart-items').addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const index = event.target.getAttribute('data-index');
            const quantity = parseInt(event.target.value, 10);
            updateQuantity(index, quantity);
        }
    });

    // Handle remove item button
    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const index = event.target.getAttribute('data-index');
            removeItem(index);
        }
    });

    // Handle checkout button (this can be linked to a checkout page or a function)
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to Checkout...');
            // Redirect to checkout page (you can replace with your checkout URL)
            // window.location.href = 'checkout.html';
        } else {
            alert('Your cart is empty.');
        }
    });
});
