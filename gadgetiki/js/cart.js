
// Απλό καλάθι με χρήση localStorage
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-name");
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            cart.push(productName);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            alert(productName + " προστέθηκε στο καλάθι!");
        });
    });

    if (document.getElementById("cart-items")) {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const cartList = document.getElementById("cart-items");
        if (cart.length === 0) {
            cartList.innerHTML = "<li>Το καλάθι σας είναι άδειο.</li>";
        } else {
            cart.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                cartList.appendChild(li);
            });
        }
    }

    const clearCartBtn = document.getElementById("clear-cart");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", () => {
            localStorage.removeItem("cart");
            window.location.reload();
        });
    }
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}
