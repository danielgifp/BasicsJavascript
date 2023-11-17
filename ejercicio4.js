const preguntar = require("prompt-sync")({ sigint: true})

let texto = preguntar ("Introducir texto: ");
let txt = "";

while (texto !== "cancelar") {
    if (String(texto)){
        txt = txt + " - " + String(texto);
        texto = preguntar("Dame otro texto");
    }
}

console.log(txt);