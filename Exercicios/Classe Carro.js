class Carro{
    marca;
    cor;
    KmPorLitro;

    constructor(marca, cor, KmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.KmPorLitro = KmPorLitro;
    }
    
    gastoMedio(quilometrosViagem, precoGasolina){
        return (quilometrosViagem / this.KmPorLitro) * precoGasolina;
    }
}

const monza = new Carro('Chevrolet', 'Vermelho', 12);
const uno = new Carro('Fiat', 'Branco', 10);

console.log(monza.gastoMedio(73, 5.75).toFixed(2))
console.log(uno.gastoMedio(73, 5.75).toFixed(2))