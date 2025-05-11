import productsData from "./Products.js";

console.log( 'productsData', productsData);


window.addEventListener("load", () => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("catr", cart);

  getCartLength(cart);

//   fetch("data/Products.json")
//     .then((res) => res.json())
//     .then((data) => {
//       const bestSellers = data.filter((p) => p.isBestSeller);
//       const wrapper = document.querySelector(".swiper-wrapper");

//       bestSellers.forEach((product) => {
//         const slide = document.createElement("div");
//         slide.className = "swiper-slide";
//         slide.innerHTML = `
//           <div class="product-card">
//             <img src="../assets/images/${product.image}" alt="${product.title}">
//             <h3>${shortten(product.title,20)}</h3>
//             <p>${product.price.toLocaleString()} تومان</p>
//               <div class="card-actions">
//     <a href="productDeatiels.html?id=${
//       product.id
//     }&from=home" class="details-link">جزئیات</a>
//     <button class="add-to-cart-btn" data-id="${
//       product.id
//     }" >افزودن به سبد خرید</button>
//   </div>
//           </div>
//         `;
//         wrapper.appendChild(slide);
//       });

//       new Swiper(".mySwiper", {
//         loop: true,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         },
//         slidesPerView: 3,
//         spaceBetween: 20,
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         // pagination: {
//         //   el: ".swiper-pagination",
//         //   clickable: true,
//         // },
//         breakpoints: {
//           768: {
//             slidesPerView: 3,
//           },
//           480: {
//             slidesPerView: 1,
//           },

//           250: {
//             slidesPerView: 1,
//           },
//         },
//       });

//       //   speacial order ......

//       const special = data.filter((p) => p.isBestSeller && p.price < 50000000);
//       const container = document.getElementById("special-products");

//       special.forEach((product) => {
//         const div = document.createElement("div");
//         const discountPrice = product.price - product.price * 0.2;
//         div.className = "offer-card";
//         div.innerHTML = `
        
//   <img src="../assets/images/${product.image}" alt="${product.title}">
//   <h3>${shortten(product.title,20)}</h3>
//   <p>${shortten(product.description , 20)}</p>
//   <p>
//   <del> ${product.price.toLocaleString()} تومان</del>
 
// </p>
//   <p class="price">قیمت با تخفیف :  ${discountPrice.toLocaleString()} تومان</p>
//   <div class="card-actions">
//     <a href="productDeatiels.html?id=${
//       product.id
//     }&from=home" class="details-link">جزئیات</a>
//     <button class="add-to-cart-btn" data-id="${product.id}">افزودن به سبد خرید</button>
//   </div>
// `;
//         container.appendChild(div);
//       });

//       //   All Products ......
//       renderProducts(data);


//     });

  
      const bestSellers = productsData.filter((p) => p.isBestSeller);
      const wrapper = document.querySelector(".swiper-wrapper");

      bestSellers.forEach((product) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
          <div class="product-card">
            <img src="assets/images/${product.image}" alt="${product.title}">
            <h3>${shortten(product.title,20)}</h3>
            <p>${product.price.toLocaleString()} تومان</p>
              <div class="card-actions">
    <a href="productDeatiels.html?id=${
      product.id
    }&from=home" class="details-link">جزئیات</a>
    <button class="add-to-cart-btn" data-id="${
      product.id
    }" >افزودن به سبد خرید</button>
  </div>
          </div>
        `;
        wrapper.appendChild(slide);
      });

      new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 1,
          },

          250: {
            slidesPerView: 1,
          },
        },
      });

      //   speacial order ......

      const special = productsData.filter((p) => p.isBestSeller && p.price < 50000000);
      const container = document.getElementById("special-products");

      special.forEach((product) => {
        const div = document.createElement("div");
        const discountPrice = product.price - product.price * 0.2;
        div.className = "offer-card";
        div.innerHTML = `
        
  <img src="assets/images/${product.image}" alt="${product.title}">
  <h3>${shortten(product.title,20)}</h3>
  <p>${shortten(product.description , 20)}</p>
  <p>
  <del> ${product.price.toLocaleString()} تومان</del>
 
</p>
  <p class="price">قیمت با تخفیف :  ${discountPrice.toLocaleString()} تومان</p>
  <div class="card-actions">
    <a href="productDeatiels.html?id=${
      product.id
    }&from=home" class="details-link">جزئیات</a>
    <button class="add-to-cart-btn" data-id="${product.id}">افزودن به سبد خرید</button>
  </div>
`;
        container.appendChild(div);
      });

      //   All Products ......
      renderProducts(productsData);


    

 



  
});






// Handle 6 Products ---------

 function renderProducts(products) {
    const container = document.getElementById("new-products");
    container.innerHTML = ""; // خالی‌کردن محتوای قبلی

    products.slice(0 , 6).forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
  <img src="assets/images/${product.image}" alt="${product.title}">
  <h3>${shortten(product.title , 20)}</h3>
  <p>${shortten(product.description , 20)}</p>
  <p class="price">${product.price.toLocaleString()} تومان</p>
  <div class="card-actions">
    <a href="productDeatiels.html?id=${
      product.id
    }&from=home" class="details-link">جزئیات</a>
    <button class="add-to-cart-btn" data-id='${
      product.id
    }'>افزودن به سبد خرید</button>
  </div>
`;

      container.appendChild(card);
    });
  }
