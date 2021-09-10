var num1 = 10;
var num2 = 10;
var total = 0;
var operacion = prompt("Escriba la operación a realizar")
var test = operacionFuncion();

switch (operacion){
    case "suma":
        suma();
        break;

    case "resta":
        resta();
        break;

    case "multiplicacion":
        multiplicacion();
        break;

    case "division":
        division();
        break;

    default:
        console.log("Error");
        break;
}
console.log("El resultado de la " + operacion + " es " + total);


function suma(){
    total = operacionFuncion(1);
}

function resta(){
    total = operacionFuncion(2);
}

function multiplicacion(){
    total = operacionFuncion(3);
}

function division(){
    total = operacionFuncion(4);
}

function operacionFuncion(tipo){
    switch (tipo){
        case 1:
            return num1 + num2;
            break;

        case 2:
            return num1 - num2;
            break;

        case 3:
            return num1 * num2;
            break;

        case 4:
            return num1 / num2;
            break;
    }
}