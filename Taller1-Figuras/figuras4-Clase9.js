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
function output (iD, num) {
    outputPantalla = document.getElementById(iD);
    outputPantalla.innerHTML = `<span>${num}</span>`;
}

//  ******************************        AQUI CONECTAMOS CON EL HTML    ****************************************

//FUNCIONES ONCLICK CUADRADO


// manera 1 de calcular perimetro (con scopelocal de funcion)
function calcularPerimetroCuadrado() {
    const inputt = document.getElementById("inputCuadrado");
    const valuee = inputt.value;
    const perimetroo = perimetroCuadrado(valuee);

    let boton = document.getElementById('btnPeriCuadrado');
    boton.addEventListener('click', output('outputCuadrado', perimetroo));
}

// manera 2 de calcular perimetro (con scope global)
    /* 
    const boton = document.getElementById('btnPeriCuadrado');
    boton.addEventListener('click', function(){
        let ladoCuad = document.getElementById('inputCuadrado').value;
        let perimetroo = perimetroCuadrado(ladoCuad);
        let salida = document.getElementById('outputCuadrado')

        salida.innerHTML = `<span>${perimetroo}</span>`
    }); 
    */

function calcularAreaCuadrado() {
    const inputt = document.getElementById("inputCuadrado");
    const valuee = inputt.value;

    const area = areaCuadrado(valuee);
    output('outputCuadrado', area);
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
    output('outputTriangulo', perimetroo);
}

function calcularAreaTriangulo() {
    const basee = document.getElementById("baseTriangulo");
    const valorBase = basee.value;
    const alturaa = document.getElementById("alturaTriangulo");
    const valorAltura = alturaa.value;

    const area = areaTriangulo(valorBase, valorAltura);
    output('outputTriangulo', area);
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
        output('outputIsosceles', altura)
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
    output('outputCirculo', perimetro)
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo").value

    const areaC = areaCirculo(radio);
    output('outputCirculo', areaC)
}

