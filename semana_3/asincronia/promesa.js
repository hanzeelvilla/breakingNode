let miPromesa = new Promise((resolve, reject) => {
    let exito = false;

    setTimeout(() => {
        if (exito)
            resolve("Si jalo");
        else
            reject("No funca 🤮");
    }, 3000);
});

miPromesa
    .then(res => console.log(res))
    .catch(err => console.log(err))

console.log("Pensanding...");