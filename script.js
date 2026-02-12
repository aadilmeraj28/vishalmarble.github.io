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
function sendBooking() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let product = document.getElementById("product").value;
  let date = document.getElementById("date").value;
  let msg = document.getElementById("message").value;

  let text =
    "Advance Booking - Vishal Marble%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Product: " + product + "%0A" +
    "Pickup Date: " + date + "%0A" +
    "Message: " + msg;

  let url = "https://wa.me/918409949407?text=" + text;
  window.open(url, "_blank");
}
