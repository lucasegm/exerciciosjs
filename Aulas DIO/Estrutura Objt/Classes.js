// uma classe define algo para ser instanciado (Lucas)

// Classe é algo que deve ser, e instancia é o que deve ser essa pessoa


// classe
class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


// instancias
const lucas = new Pessoa();
lucas.nome = 'Lucas Moreira';
lucas.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan';
renan.idade = 30;


lucas.descrever();
renan.descrever();