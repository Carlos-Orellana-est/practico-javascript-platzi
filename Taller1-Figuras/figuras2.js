//Codido del cuadrado

console.group("Cuadrados")

const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 
 // console.log ("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
} 

// console.log ("El area del cuadrado mide: " + areaCuadrado  + "cm^2");

console.groupEnd();

//Codido del triangulo

console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log ("Los lados del triangulo miden: "
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
//  );

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura ) {
    return (base * altura) / 2;
}


console.groupEnd();


//Codido del circulo

console.group("Circulos")

// Radio
// const radioCirculo = 4;
// console.log ("El radio del circulo mide: " + radioCirculo + "cm");

// Diametro
function diametroCirculo (radio) {
    return radio * 2;
}

// PI
const pI = Math.PI;
console.log ("PI es: " + pI);

// Circuferencia
function perimetroCirculo (radio) {
   const diametro = diametroCirculo(radio); 
   return diametro * pI;
}

// Area
function areaCirculo (radio) {
    return (radio*radio) * pI;
}


console.groupEnd();