const objGato = {
    nombre: "Diego",
    edad: 15
};

const jsonGato = JSON.stringify(objGato);

console.log(typeof(objGato)); // object
console.log(typeof(jsonGato)); // json

console.log(objGato);
console.log(jsonGato);