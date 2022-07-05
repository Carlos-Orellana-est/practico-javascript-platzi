// Helper

function calcularPrecioConDescuento (precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

// Array de los cupones

const coupons = [
    "Batman programo esto",
    "pero no le digas a nadie",
    "es un secreto",
];

// Calcula el precio con el descuento según el cupón

function buttonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const coupon = inputCoupon.value;

    let descuento = 0;
    switch(coupon) {
        case coupons[0]: // "Batman programó esto"
          descuento = 15;
        break;
        case coupons[1]: // "pero no le digas a nadie"
          descuento = 30;
        break;
        case coupons[2]: // "es un secreto"
          descuento = 25;
        break;
      }

    const precioConDescuento = calcularPrecioConDescuento(price, descuento);

    const resultParagraph = document.getElementById("resultPrice");
    resultParagraph.innerText = "El precio con descuento es " + precioConDescuento;
} 
