const lucas = {
    nome: 'Lucas Moreira',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

lucas.nome= 'Renato';
lucas.idade= 30;


lucas.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}

lucas.descrever();

// o objeto pode ser alterado a todo momento.