// arreglar linea 24
const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

function algoritmoModa (lista) {
    const listaCount = {};
    var repetido = 0;
    lista.map(
    function(elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] = listaCount[elemento] + 1; // Si el elemento ya habia salido, se le suma un 1 a la cantidad de veces que ya habia salido. 
            repetido += 1;
        }
        else {
            listaCount[elemento] = 1; // Si el elemento no habia salido, se le asigna un 1. 
        }
    }
);

 //Object.entries(objeto) convierte 'objeto' en un array. 

    const listaArray = Object.entries(listaCount).sort (        
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }  
    ); 

    if (repetido == 0) {
        moda = "No hay moda";
    }
    else if (repetido > 0) {
        moda = listaArray[listaArray.length - 1];
    }

    return moda;
}

const modaLista1 = algoritmoModa(lista1);

function buttonModa () {
    const userInput = document.getElementById("inputLista").value;
    const userList = userInput.split(',');
    const userListNumber = userList.map(Number);

    const userListModa= algoritmoModa(userListNumber);
    outputPantalla = document.getElementById("output");
    if (Number.isNaN(userListModa)) {
        outputPantalla.innerText = "moda: " + userListModa[0];
    }
    else {
        outputPantalla.innerText = "moda: no hay moda ";
    }
    

    console.log(userListModa);
    return userListModa;
}


// ************************************** ALGORTIMO COMENTARIO ESTUDIANTE ***************************


// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }


// console.log(mode(NUMBERS)); //5