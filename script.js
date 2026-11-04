
let products = [
    {id: 1, name: "Red Chilli Powder", price: 180},
    {id: 2, name: "Turmeric Powder", price: 150},
    {id: 3, name: "Garam Masala", price: 150},
    {id: 4, name: "Black Pepper", price: 180},
    {id: 5, name: "Green Cardamom", price: 250},
    {id: 6, name: "Saffron", price: 250}
];

let cart = [];

// Display Products
function displayProducts() {
  let list = document.getElementById("product-list");
  list.innerHTML = "";
    products.forEach(function(p) {
     list.innerHTML += `
    <div class="product-card">
    <h3>${p.name}</h3>
     <p class="price">₹${p.price}</p>
     <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart </button>
     </div>
        `;
    });
}

// Add To Cart
function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
    alert("Product Added Successfully!");
}

// Update Cart
function updateCart() {
    let items = document.getElementById("cart-items");
    let total = 0;
    items.innerHTML = "";
    cart.forEach(function(p, index) {
        items.innerHTML += `
        <div class="cart-item">
        ${p.name} - ₹${p.price}
   <button class="remove-btn" onclick="removeItem(${index})"> Remove </button>
     </div>
        `;
        total += p.price;
    });
    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;
    if(cart.length === 0) {
        items.innerHTML = "Your cart is empty.";
    }
}
// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
// Show Cart
function showCart() {
    document.getElementById("cart-section")
    .scrollIntoView({behavior: "smooth"});
}
// Checkout
function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for shopping with Spice World!");
    cart = [];
    updateCart();
}
// Start
displayProducts();
updateCart();
