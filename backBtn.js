const paramss = new URLSearchParams(window.location.search);
const from = paramss.get("from");

const backBtn = document.getElementById("backBtn");

if (from === "home") {
  backBtn.setAttribute("href", "../index.html");
} else if (from === "products") {
  backBtn.setAttribute("href", "../allProduct.html");
} else {
  backBtn.setAttribute("href", "index.html"); // پیش‌فرض
}