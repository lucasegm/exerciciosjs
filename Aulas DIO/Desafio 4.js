const peso = 61;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);
// Math.pow é uma biblioteca de funcoes matematicas (Essa é pra calcular uma potencia)

if (imc >= 40){
    console.log("Obesidade Grave")
} else if (imc  >= 30 && imc < 40){
    console.log("Obeso")
} else if (imc >= 25 && imc < 30){
    console.log("Acima do peso")
} else if(imc >= 18.5 && imc < 25){
    console.log("Peso Normal")
} else{
    console.log("Abaixo do peso")
}