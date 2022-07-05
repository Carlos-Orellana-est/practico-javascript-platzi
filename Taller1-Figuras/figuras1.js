//Codido del cuadrado

console.group("Cuadrados")

const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = 4 * ladoCuadrado;
console.log ("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El area del cuadrado mide: " + areaCuadrado  + "cm^2");

console.groupEnd();

//Codido del triangulo

console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log ("Los lados del triangulo miden: "
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
 );

console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log ("El perimetro del triangulo miden: " + perimetroTriangulo + "cm");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log ("El area del triangulo mide: " + areaTriangulo  + "cm^2");

console.groupEnd();


//Codido del circulo

console.group("Circulos")

// Radio
const radioCirculo = 4;
console.log ("El radio del circulo mide: " + radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log ("El diametro del circulo mide: " + diametroCirculo + "cm");

// PI
const pI = Math.PI;
console.log ("PI es: " + pI);

// Circuferencia
const perimetroCirculo = pI * diametroCirculo;
console.log ("El perimetro del circulo mide: " + perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo * radioCirculo) * pI;
console.log ("El area del circulo es: " + areaCirculo + "cm");



console.groupEnd();