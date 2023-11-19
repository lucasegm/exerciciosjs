function operacao(n1, n2){
    som = (n1 + n2);
    sub = (n1 - n2);
    mult = (n1 * n2);
    div = (n1 / n2);

    return{
        soma: `A soma dos números é igual à ${som}`,
        subtracao: `A subtração dos números é igual à ${sub}`,
        multiplicacao: `A multiplicação dos números é igual à ${mult}`,
        divisao: `A divisão dos números é igual à ${div}`,
    }
}

let res = operacao(7, 5)
console.log(res.soma)
console.log(res.subtracao)
console.log(res.multiplicacao)
console.log(res.divisao)