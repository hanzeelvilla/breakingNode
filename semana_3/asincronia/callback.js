function sumar(num1, num2, callback) {
    let res = num1 + num2;
    callback(res);
}

function imprimir(res) {
    console.log(res);
}

sumar(6, 8, imprimir); //imprimir sin parentesis