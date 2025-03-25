const path = require('path');

//Dirname --> Devuelve el directorio del archivo actual
const directories = path.dirname(__filename);
console.log(directories);

//Basename --> Extrae el nombre del archivo de una ruta
const filename = path.basename('Users/Archivos/Club/index.js');
console.log(filename);

//Extname --> Extensión de un archivo
const ext = path.extname('Users/Archivos/Club/index.js')
console.log(ext);

//Join --> Unir diferentes rutas
const filePath = path.join(__dirname, '/archivo.txt');
console.log(filePath)
