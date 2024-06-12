let escolhaIncorreta = 'não';
let outraIncorreta = 'nao';
let escolhaCorreta = 'Tamires';
let escolha = ('Digite seu nome');
while (escolha != escolhaCorreta) {
    let escolha = prompt ('Digite o nome da melhor irmã do mundo:');
    if (escolha == escolhaCorreta) {
        break;
    } else {
        alert ('Invasor detectado. Acesso negado.');
    }
}
alert ('Bem-vinda, Tamires.');
