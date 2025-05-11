const allProductsSection = document.getElementById("all-products");
import productsData from "./Products.js";

renderAllProducts(productsData)


function renderAllProducts(products) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   console.log("catr", cart);

  getCartLength(cart);

  allProductsSection.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
  
      card.innerHTML = `
  <img src="../assets/images/${product.image}" alt="${product.title}">
  <h3>${shortten(product.title , 20)}</h3>
  <p>${shortten(product.description , 20)}</p>
  <p class="price">${product.price.toLocaleString()} تومان</p>
  <div class="card-actions">
    <a href="productDeatiels.html?id=${
      product.id
    }&from=products" class="details-link">جزئیات</a>
    <button class="add-to-cart-btn" data-id='${
      product.id
    }'>افزودن به سبد خرید</button>
  </div>
`;
    allProductsSection.appendChild(card);
  });
}

function addToCart(id) {
//   alert(محصول با شناسه ${id} به سبد خرید اضافه شد.);
}