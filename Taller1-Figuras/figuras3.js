// **********************************         CODIGO DEL CUADRADO     ******************************************

console.group("Cuadrados")


const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 

function areaCuadrado (lado) {
    return lado * lado;
} 


console.groupEnd();


// **********************************         CODIGO DEL TRIANGULO     ******************************************


console.group("Triangulos")


function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura ) {
    return (base * altura) / 2;
}


console.groupEnd();


// **********************************         CODIGO DEL CIRCULO     ******************************************
 

console.group("Circulos")


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


//  ******************************        AQUI CONECTAMOS CON EL HTML    ****************************************

//FUNCIONES ONCLICK CUADRADO

function calcularPerimetroCuadrado() {
    const inputt = document.getElementById("inputCuadrado");
    const valuee = inputt.value;

    const perimetroo = perimetroCuadrado(valuee);
    alert(perimetroo);
}

function calcularAreaCuadrado() {
    const inputt = document.getElementById("inputCuadrado");
    const valuee = inputt.value;

    const area = areaCuadrado(valuee);
    alert(area);
}

//FUNCIONES ONCLICK TRIANGULO

function calcularPerimetroTriangulo() {
    const ladoo1 = document.getElementById("lado1Triangulo");
    const valorLado1 = parseInt(ladoo1.value);
    const ladoo2 = document.getElementById("lado2Triangulo");
    const valorLado2 = parseInt(ladoo2.value);
    const basee = document.getElementById("baseTriangulo");
    const valorBase = parseInt(basee.value);

    const perimetroo = perimetroTriangulo(valorLado1, valorLado2, valorBase);
    alert(perimetroo);
}

function calcularAreaTriangulo() {
    const basee = document.getElementById("baseTriangulo");
    const valorBase = basee.value;
    const alturaa = document.getElementById("alturaTriangulo");
    const valorAltura = alturaa.value;

    const area = areaTriangulo(valorBase, valorAltura);
    alert(area);
}

//FUNCIONES ONCLICK CIRCULO

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo").value

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo").value

    const areaC = areaCirculo(radio);
    return areaC
}
