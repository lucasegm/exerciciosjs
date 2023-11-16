const n1 = 7;
const n2 = 5;
const n3 = 6;
const media = (n1 + n2 + n3) / 3;

if (media >= 7){
    console.log("Parabéns, você foi aprovado!")
} else if (media >= 5 && media <= 7){
    console.log("Poxa, você ficou de recuperação!")
} else{
    console.log("Você foi reprovado!")
}