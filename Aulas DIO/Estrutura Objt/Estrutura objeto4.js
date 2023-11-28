const lucas = {
    nome: 'Lucas Moreira',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// forma de acessar um atributo dentro da const (anotação de coleção)

lucas['nome'] = 'teste';
lucas.nome = 'testa';

console.log(lucas.nome)