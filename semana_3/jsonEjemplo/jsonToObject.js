const jsonData = '{"nombre": "Hanzeel", "edad": 30}';

const objeto = JSON.parse(jsonData);
console.log(typeof(jsonData)); // string
console.log(typeof(objeto)); // object

console.log(jsonData);
console.log(objeto);