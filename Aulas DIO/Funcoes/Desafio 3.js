function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100))
}

function aplicarJuros(valor, juros){
    return valor + (valor * (juros / 100))
}

function formaDePagamento(n){
    if (n === 1){
        console.log('Pagando no débito o valor será: R$ ' + aplicarDesconto(100, 10))
    } else if (n === 2){
        console.log('Pagando em dinheiro ou PIX o valor será: R$ ' + aplicarDesconto(100, 15))
        } else if (n === 4){
            console.log('Parcelando em 2x o valor será: R$ ' + aplicarJuros(100, 10))
        } else if (n === 3){
            console.log('O valor do produto não tem desconto.')
        }
}

formaDePagamento(4);