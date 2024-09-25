function fibonacci(n) {
    let a = 0, b = 1;

    if (n === 0 || n === 1) {
        return true;
    }
    while (b < n) {
        [a, b] = [b, a + b]; 
    }
    return b === n;
}


function verificarFibonacci(numero){
    if (fibonacci(numero)) {
        console.log("O número "+ numero + " digitado é um número de Fibonacci.");
    } else {
        console.log("O número "+ numero +" digitado não é um número de Fibonacci.");
    }
}

//Defina no parametro o valor a ser passado
verificarFibonacci(13);
verificarFibonacci(22);
