function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:
    var arregloFibonacci = [];

    if (n === 1) {
        arregloFibonacci = [0];
    } else if (n === 2) {
        arregloFibonacci = [0, 1];
    } else {
        arregloFibonacci = [0, 1];
        for (var i = 2; i < n; i++) {
            var sumNum = arregloFibonacci[i - 2] + arregloFibonacci[i - 1];
            arregloFibonacci.push(sumNum);
        }
    }
    return arregloFibonacci;



    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}
