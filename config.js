// Fill these in once the Payhip listings are live. Until then the buttons point to the home page.
window.SHOP = {
  moneyReset: "https://payhip.com/b/pDxPj",
  calmBrain: "https://payhip.com/b/NqQJW"
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-shop]").forEach(function (a) {
    var url = window.SHOP[a.dataset.shop];
    a.href = url && url.indexOf("http") === 0 ? url : "index.html";
  });
});
