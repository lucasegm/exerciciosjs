function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2)
}

function classificacaoIMC(imc){
    if (imc >= 40){
       return "Obesidade Grave"
    } else if (imc  >= 30 && imc < 40){
        return "Obeso"
    } else if (imc >= 25 && imc < 30){
        return "Acima do peso"
    } else if(imc >= 18.5 && imc < 25){
        return "Peso Normal"
    } else{
        return "Abaixo do peso"
    }
}


(function main(){
    const peso = 60;
    const altura = 1.75;

    const imc = calcularIMC(peso, altura)
    console.log(classificacaoIMC(imc))
})();
// no exemplo function main, eu acabei de deixar em parenteses, tornando prioridade, e chamei a função com o parenteses ao final