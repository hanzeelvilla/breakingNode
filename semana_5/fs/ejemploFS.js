const fs = require("node:fs")
const file = "texto1.txt"
const file2 = "texto2.txt"

// Leer
fs.readFileS(file, "utf-8", (err, data) => {
    if (err) {
        console.log(`Error al leer el archivo: ${err}`);
        return ;
    }

    console.log("Contenido:");
    console.log(data)
});

// Escribir
fs.writeFileS(file, "Hola soy un nuevo texto", (err) => {
    if (err)
        throw err;

    console.log(`Archivo ${file} sobreescrito`);
});

// Agregar línea sin modificar el texto anterior
fs.appendFile(file, "\nNuevo texto", (err) => {
    if (err)
        throw err;

    console.log(`Archivo ${file} con nueva línea`);
});

// Eliminar archivos
fs.unlink(file2, (err) => {
    if (err)
        throw err;

    console.log(`Archivo ${file2} eliminado`)
});

// Renombar archivos
fs.rename(file, "texto.txt", (err) => {
    if (err)
        throw err;

    console.log("El archivo se cambio de nombre")
});