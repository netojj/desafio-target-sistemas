function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let sequencia = [a];

    while (a <= numero) {
        sequencia.push(b);
        if (a === numero) {
            console.log(`Cálculo da sequência: ${sequencia.join(', ')}`);
            return (`O número ${numero} pertence à sequência de Fibonacci.`);
        }   
        [a, b] = [b, a + b];
    }

    console.log(`Cálculo da sequência: ${sequencia.join(', ')}`);
    return (`O número ${numero} não pertence à sequência de Fibonacci.`);
}

const numero = parseInt(prompt("Informe um número: "));
alert(pertenceFibonacci(numero));
