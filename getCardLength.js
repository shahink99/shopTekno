function getCartLength(cart) {
  const badgeIcon = document.querySelector(".badge-icon");
  if (badgeIcon) {
    badgeIcon.innerHTML = cart.length;
  }
}

// در اختیار فایل‌های دیگه قرار بده
window.getCartLength = getCartLength;