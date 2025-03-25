const fs = require('fs');

const argumentos = process.argv;

if (argumentos.length < 3) {
  console.error('Error: No se ha pasado ningún archivo');
  process.exit(1);
}
else if (argumentos.length > 3) {
  console.error('Error: Demasiados argumentos, solo se puede pasar un archivo');
  process.exit(1);
}
else {
    const archvio = argumentos[2];
    fs.readFile(archvio, "utf8", (err, data) => {
        if (err) {
            console.error('Error: No se ha podido leer el archivo');
            process.exit(1);
        }
        const palabras = data.split(' ');
        console.log(`El archivo tiene ${palabras.length} palabras`);
    });
}