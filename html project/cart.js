// -------------------------------------
// ADD TO CART FUNCTIONALITY
// -------------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");

    const item = {
      name: card.querySelector("h3").innerText,
      price: parseFloat(card.querySelector(".price").innerText.replace("$", "")),
      img: card.querySelector("img").src,
      qty: 1
    };

    // If item exists, increase qty
    const existing = cart.find(x => x.name === item.name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(" Added to Cart!");
  });
});
