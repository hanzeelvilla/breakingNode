/* --------------------------- FUNCION DECLARATIVA -------------------------- */
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}


saludar("Hanzeel");

/* ---------------------------- FUNCION EXPRESADA --------------------------- */
const saludar2 = function(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar2("Laura");

/* ---------------------------- FUNCION DE FLECHA --------------------------- */
const saludar3 = (nombre) => console.log(`Hola ${nombre}`);

saludar3("Angel");