let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart");
}

window.onload = function () {
  let list = document.getElementById("cartItems");
  if (!list) return;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
};
