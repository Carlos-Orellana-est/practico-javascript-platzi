// Helpers 

function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    400000000,
];
lista1.sort(function(a, b){return a - b}); 

function esPar(numerito) {
    if (numerito % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function calcularMediana (listaa) {
    const mitadlistaa = parseInt(listaa.length / 2);
    let mediana;
    if (esPar(listaa.length)) {
        const elemento1 = listaa[mitadlistaa];
        const elemento2 = listaa[mitadlistaa - 1];
     
        const promedioo = calcularPromedio ([elemento1, elemento2])
        mediana = promedioo;
     
     } 
     else {
         mediana = lista1[mitadlistaa]
     }
     return mediana;
}


