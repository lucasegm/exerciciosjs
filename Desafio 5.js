const produto = 60.5;
const descontoDebito = ((produto*10)/100);
const descontoPix = ((produto*15)/100);
const acrescimoParcelado = ((produto*10)/100);
const formaDePagamento = "parcelado";

if (formaDePagamento == "debito"){
    console.log("Pagando no débito o valor é de R$ " + (produto - descontoDebito.toFixed(2)));
} else if (formaDePagamento == "pix"){
    console.log("Pagando no PIX o valor é de R$ " + (produto - descontoPix.toFixed(2)));
} else if (formaDePagamento == "parcelado"){
    console.log("Pagando parcelado em até 2x o valor é de R$ " + (produto + acrescimoParcelado.toFixed(2)));
} else {
    console.log("Pagando em dinheiro o valor é de R$ " + (produto));
}