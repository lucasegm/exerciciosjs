class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc() {
        return this.peso / (this.altura * this.altura)
    }
    classificarImc(){
        const imc = this.calculoImc();
        if (imc >= 40){
            return("Obesidade Grave")
        } else if (imc  >= 30 && imc < 40){
            return("Obeso")
        } else if (imc >= 25 && imc < 30){
            return("Acima do peso")
        } else if(imc >= 18.5 && imc < 25){
            return("Peso Normal")
        } else{
            return("Abaixo do peso")
        }
    }
}

const jose = new Pessoas('Jose Alberto', 70, 1.75);
const lucas = new Pessoas('Lucas', 60, 1.75)
const renan = new Pessoas('Renan', 65, 1.60)

console.log(jose.classificarImc());
console.log(lucas.classificarImc());
console.log(renan.classificarImc());