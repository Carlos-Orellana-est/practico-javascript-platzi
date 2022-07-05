const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

function algoritmoModa (lista) {
    const listaCount = {};
    lista.map(
    function(elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] = listaCount[elemento] + 1; // Si el elemento ya habia salido, se le suma un 1 a la cantidad de veces que ya habia salido. 
        }
        else {
            listaCount[elemento] = 1; // Si el elemento no habia salido, se le asigna un 1. 
        }
    }
);

 //Object.entries(objeto) convierte 'objeto' en un array. 

    const listaArray = Object.entries(listaCount).sort (             
        function (valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
        }    
    ); 

    const moda = listaArray[listaArray.length - 1]
    return moda;
}

const modaLista1 = algoritmoModa(lista1)


// ************************************** ALGORTIMO COMENTARIO ESTUDIANTE ***************************


// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }


// console.log(mode(NUMBERS)); //5