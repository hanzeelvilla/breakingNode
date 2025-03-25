const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("balanceUniversal", () => {
    const frases = [
        "Le echo agua?",
        "Wey se está quemando el carro",
        "Donde esta la manguera?",
        "Aqui esta tu ******* manguera"
    ];

    const fraseRandom = frases[Math.floor(Math.random() * frases.length)];
    console.log(fraseRandom);
});

eventEmitter.emit("balanceUniversal");