// Helpers 

function esPar (numero) {
    return numero % 2 == 0;  // Esta linea reduce el codigo 18-23. El hecho de hacer la comparacion devuelve un true o false. 

    // if () {
    //     return true;
    // }
    // else {
    //     return false;
    // }
}

function calcularPromedio (lista) {
    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// Calculadora Mediana


function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularPromedio([personaMitad1, personaMitad2]);  // O tambien se puede solamente sumar los 2 personitas y dividirlo entre 2. 
        return mediana;
    }
    else {
        const mediana = lista[mitad];
        return mediana;
    }
}


// Mediana General


const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);
const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Mediana del top 10%


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col
);

