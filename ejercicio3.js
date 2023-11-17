const preguntar = require("prompt-sync")({ sigint: true})

let Numero = preguntar ("Dame un número: ");
let suma = 0;

while (Numero !== "cancelar") {
    if (Number(Numero)){
        suma = suma + Number(Numero);
        Numero = preguntar("Dame otro número");
    }

    else {
        console.log("No es un número");
        Numero = preguntar("Dame otro número");
    }
}

console.log("La suma es: ",suma);