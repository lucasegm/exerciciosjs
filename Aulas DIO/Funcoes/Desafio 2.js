function verificarIdade(idade){
    if (idade >= 18){
        return 'Você é maior de idade';
    } else{
        return 'Você não é maior de idade';
    }
}

function main(){
    console.log(verificarIdade(15))
}
main()