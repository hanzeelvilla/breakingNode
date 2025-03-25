const events = require("node:events");
const eventEmitter = new events.EventEmitter();

// Que hacer cuando se recibe el evento
eventEmitter.on("hola", () => {
    console.log("Hola soy el evento");
})

// Invocar el evento hola
eventEmitter.emit("hola");