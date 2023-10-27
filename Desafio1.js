const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 59;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

/* Calculo de uma viagem */
/* toFixed define o numero maximo de casas após as casas decimais */