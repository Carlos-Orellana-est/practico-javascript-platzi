
function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function buttonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);

    const resultParagraph = document.getElementById("resultPrice");
    resultParagraph.innerText = "El precio con descuento es " + precioConDescuento;
} 

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });