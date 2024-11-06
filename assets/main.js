document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".js-qty_adjust").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const qtySelector = this.parentNode.querySelector(".js-qty");
      let qty = parseInt(qtySelector.value.replace(/\D/g, ""));

      if (this.classList.contains("js-qty_adjust--increase")) {
        qty += 1;
      } else {
        qty -= 1;
        if (qty <= 1) {
          qty = 1;
        }
      }

      qtySelector.value = qty;
    });
  });
});
