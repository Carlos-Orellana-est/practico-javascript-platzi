/* El promedio ponderado se calcula: 
1. Primero debemos multiplicar cada dato por su ponderación 
2. luego sumar dichos valores. 
3. Finalmente debemos dividir esta suma por la suma de todos los pesos. */

// En este caso al ser cursos con sus respectivos créditos y sus notas, se multiplica la nota por los creditos y se divide entre la suma de los creditos. 
// * Este código no está encapsulado en funciones

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

// multiplicamos cada nota por su respectivo peso. 

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

// suma de la multiplicacion de cada dato * ponderación

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// suma de las ponderaciones (créditos)

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// division

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;