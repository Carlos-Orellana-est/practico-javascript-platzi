// Helpers

function calcularPrecioConDescuento (precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

// Array de los cupones, con diccionario

const coupons = [
  {
      name: "Batman programo esto",
      discount: 15,
  },
  {
      name: "pero no le digas a nadie",
      discount: 30,
  },
  {
      name: "es un secreto",
      discount: 25,
  },
];

// Calcula el precio con el descuento según el cupón

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponn = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
      return coupon.name === couponn;
    };
    
    const userCoupon = coupons.find(isCouponValueValid); //Solo tiene el nombre. 
  
    if (!userCoupon) {
        alert("El cupón " + couponn + "no es válido");
    }
    else {
      const descuento = userCoupon.discount; // Al userCoupon solo tener el nombre y no ambas, como es que puedo extrar .discount. 
      const precioConDescuento = calcularPrecioConDescuento(price, descuento);
  
      const resultP = document.getElementById("resultPrice");
      resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
} 
