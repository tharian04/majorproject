// Simple cart management example
let cart = [];

function addToCart(productId) {
    // For simplicity, just add the productId to the cart array
    cart.push(productId);
    alert('Item added to cart');
}

// Display cart items in the cart page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cart-items')) {
        const cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = cart.map(id => `<li>Product ${id}</li>`).join('');
    }
});
