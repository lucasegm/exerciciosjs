
// classe
class Pessoa{
    nome;
    idade;
    anoDeNascimento;

// sempre que uma const é instanciada, ela passa pelo constructor
    constructor(nome, idade){
        this.nome= nome;
        this.idade= idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


// instancias
const lucas = new Pessoa('Lucas', 25);

const renan = new Pessoa('Renan', 30);


lucas.descrever()
renan.descrever()