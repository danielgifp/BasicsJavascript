
const preguntar = require("prompt-sync")({ sigint: true})

let nombre = preguntar ("¿Cuál es tu nombre?"); 
let edad = preguntar ("¿Qué edad tienes?");

if (edad >= 18) {
    console.log("¡Ya puedes confucir!")
} else {
    console.log("Todavía no puedes conducir")
}