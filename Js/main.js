import { viewProduct } from './product.js';
import { fetchData } from './api.js';
import { generateProductContainers } from './generate.js';

// Add cart functionality
function addToCart(product, condition) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, condition });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add checkout functionality
function handleCheckout(event) {
    event.preventDefault();
    // Checkout logic
    localStorage.removeItem('cart');
    // Redirect or show a message
}

// Existing window.onload function
window.onload = function() {
    const productContainer = document.getElementById("productContainer");
    const loader = document.getElementById("loader");
    const errorMessage = document.getElementById("errorMessage");

    if (productContainer) {
        fetchData()
            .then(data => {
                loader.style.display = "none";
                generateProductContainers(data);
            })
            .catch(error => {
                console.error('Error:', error);
                loader.style.display = "none";
                errorMessage.textContent = 'This didnt go as planned! :( ' + error.message;
                errorMessage.style.display = "block";
            });
    }

    const productDetailsContainer = document.getElementById("productDetailsContainer");
    const productData = JSON.parse(localStorage.getItem('productData'));
    if (productDetailsContainer && productData) {
        viewProduct(productData);
    }
}

// Export the new functions
export { addToCart, handleCheckout };
