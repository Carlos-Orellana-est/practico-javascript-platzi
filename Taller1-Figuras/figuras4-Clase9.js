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

// *************************************** FUNCION OUTPUT *******************************************************
function output (iD, num, tipoCalc) {
    outputPantalla = document.getElementById(iD);
    outputPantalla.innerText = tipoCalc + ": " + num;
}

//  ******************************        AQUI CONECTAMOS CON EL HTML    ****************************************

//FUNCIONES ONCLICK CUADRADO


function calcularPerimetroCuadrado() {
    const inputt = document.getElementById("inputCuadrado");
    const valuee = inputt.value;
    const perimetroo = perimetroCuadrado(valuee);

    let boton = document.getElementById('btnPeriCuadrado');
    output('outputCuadrado', perimetroo, "Perimetro");
}

function calcularAreaCuadrado() {
    const inputt = document.getElementById("inputCuadrado");
    const valuee = inputt.value;

    const area = areaCuadrado(valuee);
    "El area del cuadrado es: " + output('outputCuadrado', area, "Area");
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
    output('outputTriangulo', perimetroo, "Perimetro");
}

function calcularAreaTriangulo() {
    const basee = document.getElementById("baseTriangulo");
    const valorBase = basee.value;
    const alturaa = document.getElementById("alturaTriangulo");
    const valorAltura = alturaa.value;

    const area = areaTriangulo(valorBase, valorAltura);
    output('outputTriangulo', area, "Area");
}

//FUNCIONES ONCLICK TRIANGULO ISOSCELES

function alturaIsosceles (lado1, lado2, base) {
    let altura = 0;
    if (lado1 != lado2) {
        console.error("Los lados a y b no son iguales");
        alert("Los lados a y b no son iguales");
    }
    else {
        altura = Math.sqrt((lado1**2) - (base**2/4));
        output('outputIsosceles', altura, "Altura")
    }
   
    return altura;
}

function hIsoscelesHtml () {
    const ladoo1 = document.getElementById("lado1Isosceles").value;
    const ladoo2 = document.getElementById("lado2Isosceles").value;
    const basee = document.getElementById("lado3Isosceles").value;
    alturaIsosceles(ladoo1, ladoo2, basee);
    
}

//FUNCIONES ONCLICK CIRCULO

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo").value

    const perimetro = perimetroCirculo(radio);
    output('outputCirculo', perimetro, "Perimetro")
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo").value

    const areaC = areaCirculo(radio);
    output('outputCirculo', areaC, "Area")
}

