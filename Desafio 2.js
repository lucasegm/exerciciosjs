const etanol = 3.64;
const gasolina = 5.82;
const distanciaKm = 2365.6;
const combustivelCarro = gasolina;
const kmPorLitroGasolina = 14;
const kmPorLitroEtanol = 11;

console.log("O gasto médio de combustível do seu carro é de " + kmPorLitroGasolina + " km por litro usando gasolina.");
console.log("O gasto médio de combustível do seu carro é de " + kmPorLitroEtanol + " km por litro usando etanol.");

if (combustivelCarro === gasolina) {
    console.log("Custo total com gasolina: R$ " + ((distanciaKm / kmPorLitroGasolina) * gasolina).toFixed(2));
} else {
    console.log("Custo total com etanol: R$ " + ((distanciaKm / kmPorLitroEtanol)*etanol).toFixed(2));
}