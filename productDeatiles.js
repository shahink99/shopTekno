
import productsData from "./Products.js";

 window.addEventListener("load", () => {
  const productDetailsContainer = document.getElementById("product-details");
  const params = new URLSearchParams(window.location.search);
  const productParamsId = params.get("id");
  console.log(productParamsId);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  window.getCartLength(cart);

 
      const product = productsData.find((p) => p.id === Number(productParamsId));

      if (!product) {
        productDetailsContainer.innerHTML = "<p>محصول مورد نظر یافت نشد.</p>";
        return;
      }

      productDetailsContainer.innerHTML = `
      <img src="assets/images/${product.image}" alt="${product.title}">
      <div class="product-info">
        <h1>${product.title}</h1>
        <p class="description">${product.description}</p>
        <p class="price">${product.price.toLocaleString()} تومان</p>
        <button class="add-to-cart-btn" data-id="${
          product.id
        }" >افزودن به سبد خرید</button>
        <a href="#" id="backBtn">برگشت  </a>
      </div>
    `;

      const from = params.get("from");

      const backBtn = document.getElementById("backBtn");

      if (from === "home") {
        backBtn.setAttribute("href", "index.html");
      } else if (from === "products") {
        backBtn.setAttribute("href", "allProduct.html");
      } else {
        backBtn.setAttribute("href", "index.html"); // پیش‌فرض
      }
    
});
