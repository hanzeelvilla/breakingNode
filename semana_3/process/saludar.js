const argumentos = process.argv;

if (argumentos.length > 3) {
    console.log("Solo pasa un nombre");
    process.exit(1);
}
else if (argumentos.length < 3) {
    console.log("Debes de pasar un nombre");
    process.exit(1);
}

else {
    const nombre = argumentos[2];
    console.log(`Hola ${nombre}`);
}