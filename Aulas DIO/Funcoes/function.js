function sayMyName(name){
    console.log('Your name is: ' + name);
}

sayMyName('Lucas');
sayMyName('Luc');


// exemplo 1

function operacao(n){
    return n
}

console.log(operacao(10) + operacao(20))

// exemplo 2

function operacao1(n1){
    return n1 + n1
}

console.log(operacao1(10))

// exemplo 3


function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) *valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(500, 35));

// exemplo 4