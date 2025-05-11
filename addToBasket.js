  import productsData from "./Products.js";
document.addEventListener("DOMContentLoaded", () => {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  window.getCartLength(cart);
});



document.addEventListener("click", (e) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = Number(e.target.dataset.id);

    // fetch("../data/Products.json")
    //   .then((res) => res.json())
    //   .then((data) => {
        
    //   });


    const product = productsData.find((p) => p.id === productId);

        const existing = cart.find((item) => item.id === product.id);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.getCartLength(cart); // نمایش تعداد جدید
        showToast("محصول به سبد خرید اضافه شد!", "success", "#27AE60");
  }
});