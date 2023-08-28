// Fibonacci Romi <3
let salida = [];

if (n === 1) {
    salida = [0];
} else if (n === 2) {
    salida = [0, 1];
} else {
    salida = [0, 1];
    for (var i = 2; i < n; i++) {
        salida.push(salida[i - 2] + salida[i - 1]);
    }
}
return salida;

