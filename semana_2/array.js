const edades = [20, 22, 21, 19];
const nombres = ["Hanzeel", "Rene", "Rodrigo"];
const persona = ["Angel", 20, false, "fucho"];

//console.log(edades.at(-1));
//console.log(nombres[1]);
//console.log(persona[3]);

// LOS ARRAYS PUEDEN ALMACENAR CUALQUIER TIPO DE DATO
const persona2 = ["Hanzeel", 20, ["Valorant", "Musica", "Quesadillas"]];
const persona3 = ["Luis", 20, {"hobby": "Clash", "comida": "Quesadillas"}];

//console.log(persona2[2][0]);

/* --------------------------- MOFICAR UN ELEMENTO -------------------------- */
const numeros = [1, 2, 3, 4, 5];
//console.log(numeros);
numeros[2] = "XD";
//console.log(numeros)

/* ---------------------------- AGREGAR ELEMENTO ---------------------------- */
numeros[2] = 3;
numeros.push(6); // final
//console.log(numeros);
numeros.unshift(0); // principio
//console.log(numeros);

/* ---------------------------- ELIMINAR ELEMENTO --------------------------- */
console.log(numeros.pop()); // ultimo
console.log(numeros.shift()) // primero

/* ------------------------ EJEMPLO GARBAGE COLLECTOR ----------------------- */
let cosa = "cosa";
console.log(cosa);
cosa = null;