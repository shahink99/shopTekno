let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsEl = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const cancelBtn = document.getElementById("cancel-btn");
const checkoutMessage = document.getElementById("checkout-message");
const cancelMessage = document.getElementById("cancel-message");

function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const { title, price, image, quantity } = item;

    total += price * quantity;

    const card = document.createElement("div");
    card.classList.add("cart-card");

    card.innerHTML = `
      <img src="assets/images/${image}" alt="${title}" class="cart-img" />
      <div class="cart-details">
        <h3>${title}</h3>
        <p>قیمت: ${price.toLocaleString()} تومان</p>
        <p>تعداد:
          <button class="qty-btn" data-action="decrease" data-index="${index}">-</button>
          ${quantity}
          <button class="qty-btn" data-action="increase" data-index="${index}">+</button>
        </p>
        <button class="remove-btn" data-index="${index}">حذف</button>
      </div>
    `;

    cartItemsEl.appendChild(card);
  });

  cartTotal.textContent = total.toLocaleString();
  localStorage.setItem("cart", JSON.stringify(cart));
}

cartItemsEl.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  const action = e.target.dataset.action;

  if (action === "increase") {
    cart[index].quantity += 1;
  }

  if (action === "decrease") {
    cart[index].quantity -= 1;
    if (cart[index].quantity === 0) {

         confirmDelete("آیا از حذف این محصول مطمئن هستید؟" ,() => {
            cart.splice(index, 1)
            localStorage.setItem("cart" , JSON.stringify(cart))
            renderCart()
    } 
    
    )
        cart[index].quantity = 1;
    
    }
  }



  if (e.target.classList.contains("remove-btn")) {
    // const confirmed = confirm("آیا از حذف این محصول مطمئن هستید؟");
    confirmDelete("آیا از حذف این محصول مطمئن هستید؟" ,() => {
            cart.splice(index, 1)
            localStorage.setItem("cart" , JSON.stringify(cart))
            renderCart()
    } );
   
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();

  checkoutMessage.textContent =
    "پرداخت با موفقیت انجام شد. با تشکر از خرید شما!";
  checkoutMessage.style.color = "green";
});

renderCart();

cancelBtn.addEventListener("click", () => {

    confirmDelete("آیا از خرید انصراف میدین؟" ,() => {
      
             cart = [];
            localStorage.setItem("cart" , JSON.stringify(cart))
            renderCart()
        showToast(' خرید با موفقیت لغو شد !', 'success' , '#27AE60');

    } );




  cancelMessage.innerHTML = `<a href='index.html'>برگشت به فروشگاه</a>`;
});

