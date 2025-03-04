async function granadosEstaPensando() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 10) + 1;

            if (randomNum < 9)
                reject("Granados vuelve con su ex 🤮");
            
            resolve("Granados NO vuelve con su ex, FELICIDADES SHINJI! 😎");
        }, 3000);
    });
};

async function granadosVuelveConSuEx() {
    try {
        console.log("Granados esta pensando... 🥶");
        const decision = await granadosEstaPensando();
        console.log(decision);
    }
    catch(err) {
        console.log(err);
    }
};

granadosVuelveConSuEx();