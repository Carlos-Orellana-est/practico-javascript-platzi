const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularPromedio (lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento) {
    //        return valorAcumulado + nuevoElemento;
    //     }
    // );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function buttonPromedio() {
    const userInput = document.getElementById("inputLista").value;
    const userList = userInput.split(',');
    const userListNumber = userList.map(Number);

    const userListProm = calcularPromedio(userListNumber);
    outputPantalla = document.getElementById("output");
    outputPantalla.innerText = "promedio: " + userListProm;

    return userListProm;
}