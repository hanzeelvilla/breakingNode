const miMascota = {
    "nombre": "Viejon",
    "edad": 8,
    "especie": "perro",
    "raza": "beagle"
};

//console.log(miMascota);
// console.log(typeof(miMascota));
console.table(miMascota);

/*
const miMascota2 = new Object();
miMascota2.nombre = "Viejon";
miMascota2.edad = 8;
miMascota2.especie = "perro";
miMascota2.raza = "beagle"
*/

/*
enum Rol {
    controlador, // 0
    Duelista, // 1
    Sentinela, // 2
    Iniciador // 3
};
*/

/*
const agenteValorant = {
    "nombre": "Omen",
    "rol": "controlador", // Rol.Controlador
    "habilidades": ["tp", "paranoia", "humos", "ulti"]
};
*/

const agenteValorant = {
    "nombre": "Omen",
    "rol": "controlador", // Rol.Controlador
    "habilidades": [
        {
            "nombre": "tp",
            "cantidad": 2,
            "precio": 100,
            "recargable": false
        },
        {
            "nombre": "humos",
            "cantidad": 2,
            "precio": 100,
            "recargable": true
        },
        {
            "nombre": "paranoia",
            "cantidad": 1,
            "precio": 100,
            "recargable": false
        },
        {
            "nombre": "ulti",
            "orbes": 7
        },
    ]
};

console.table(agenteValorant);
console.log(agenteValorant.nombre);
console.log(agenteValorant.habilidades[2].nombre);