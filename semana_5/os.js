const os = require('os');

//Arch --> Ver la arquitectura del sistema
const arch = os.arch();
console.log(arch);

//Type --> Sistema operativo
const type = os.type();
console.log(type);

//Hostname --> Nombre del usuario
const hostname = os.hostname();
console.log(hostname);

//Freemem --> Ver la memoria libre del sistema
const freeMem = os.freemem();
console.log(freeMem / 1024 / 1024 / 1024);

//Totalmem --> Memoria total del sistema
const totalMem = os.totalmem();
console.log(totalMem);


const usedMem = totalMem - freeMem;
console.log(usedMem);