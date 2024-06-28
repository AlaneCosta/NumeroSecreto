alert('Bem-vindo ao jogo do número secreto');


let totalNumeros = 50;
let secretNumber = parseInt(Math.random() * totalNumeros + 1);
let chute; 
let tentativas = 1;

while (chute != secretNumber) {
    chute = Number(prompt(`Qual é o número secreto entre 1 e ${totalNumeros}?`));
    if (chute == secretNumber) {   
        break;
    } else {
        if (chute < secretNumber){
            alert(`O número é maior que ${chute}!`);
        } else {
            alert(`O número é menor que ${chute}!`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você descobriu o número secreto ${secretNumber} com ${tentativas} tentativas`);