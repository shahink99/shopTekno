const productContainer = document.getElementById("category-products");
const categoryButtons = document.querySelectorAll(".category-buttons button");

import productsData from "./Products.js";





  showProductsByCategory("phone"); 
    activateButton("phone");

function renderCategoryProducts(productsData) {
  productContainer.innerHTML = "";

  productsData.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="assets/images/${product.image}" alt="${product.title}">
      <h3>${shortten(product.title, 20)}</h3>
      <p>${shortten(product.description, 20)}</p>
      <p class="price">${product.price.toLocaleString()} تومان</p>
      <div class="card-actions">
        <a href="productDeatiels.html?id=${product.id}" class="details-link">جزئیات</a>
        <button class="add-to-cart-btn" data-id="${product.id}">افزودن به سبد خرید</button>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

function showProductsByCategory(category) {
  const filtered = productsData.filter(p => p.category === category);
  renderCategoryProducts(filtered);
}

function activateButton(category) {
  categoryButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    }
  });
}

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    showProductsByCategory(category);
    activateButton(category);
  });
});
