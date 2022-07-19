// A partir de la linea 95 no funciona. Probarlo. 
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


//Calculadora mediana top 10% de la poblacion


function medianaTop10 (lista) {
    const spliceStart = parseInt((lista.length * 90) / 100);
    const spliceCount = parseInt(lista.length - spliceStart);
    
    const salariosTop10 = lista.splice(spliceStart, spliceCount)
    const medianaTop10 = medianaSalarios(salariosTop10);
    
    return medianaTop10;
}


//Ordenando la lista


function sortingList (lista) {
    const listaSorted = lista.sort(
        function (salarioA, salarioB) {
            return salarioA - salarioB;
        }
    );
    return listaSorted;
}


// ****************************************************** MEDIANAS BASE DE DATOS COLOMBIA  ********************************************************


// Mediana General BD Colombia
    
const salariosCol = colombia.map (
    function(persona) {
        return persona.salary;
    }
);
const salariosColSorted = sortingList(salariosCol);
const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Mediana del top 10% BD Colombia

const medianaTop10Col = medianaTop10(salariosColSorted);

console.log("mediana general: " + medianaGeneralCol);
console.log ("mediana top 10% de la población Colombiana: " + medianaTop10Col);


// *********************************************************  MEDIANAS INPUT CON EL HTML ********************************************************

// transformando el string del input en array

function transformandoInput () {
    const userInput = document.getElementById("inputLista").value;
    const userList = userInput.split(',');
    const userListNumber = userList.map(Number);
    
    const salariosSorted = sortingList(userListNumber);

    return salariosSorted;
}



// Mediana general input del html

function buttonMediana() {
    const salariosOrdenados = transformandoInput();
    const medianaGeneral = medianaSalarios(salariosOrdenados);
    outputPantalla = document.getElementById("output");
    outputPantalla.innerText = "mediana: " + medianaGeneral;

    console.log("mediana: " + medianaGeneral);

    return medianaGeneral;
}
    

// Mediana del top 10% input html
    
function buttonMedianaTop10() {
    const salariosOrdenados = transformandoInput();
    const medianaTop = medianaTop10(salariosOrdenados);
    outputPantalla = document.getElementById("output");
    outputPantalla.innerText = "mediana del top 10% ingresos: " + medianaTop;

    console.log ("mediana top 10% ingresos: " + medianaTop);
    
    return medianaTop;
}
    