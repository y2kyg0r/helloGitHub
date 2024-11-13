function butao(){
    let PesoPermitido, Peso, excesso, multa
    PesoPermitido = Number(prompt("Digite o peso permitido"))
    Peso = Number(prompt("Digite o peso pescado"))
    if(PesoPermitido < Peso){
    excesso = Peso - PesoPermitido
    multa = excesso * 5;
        alert("Sua multa é de: " + multa)
    }
    else{
        alert("Você não precisa pagar multa")
    }
}
function idade(){
    let nome, ano, idade
    nome = prompt("Digite seu Nome")
    alert("Olá " + nome + ", tudo bem?")
    ano = prompt("Digite seu ano de nascimento por favor!")
    idade = 2024 - ano
    if(idade <= 17){
        alert("Você é menor de iadde")
    }
    else if(idade >= 19){
        alert("Você é maior de idade")
    }
    else{
        alert("Você acabou de completar 18 anos")
    }
}
function contagem(){
    let numero = prompt("Digite o limite da contagem");
    let tabelinha = "";
    // let i = 0;
    // while(i < numero){
    //     i += 3;
    //     alert(i);
    // }
    for(i = 0; i <= numero; i += 3){
       tabelinha  += i+"\n"
    }
    document.getElementById("tabela").innerHTML = tabelinha
}
function arrays(){
    let caixaDeBomBons = [];
    let quantidades = prompt("Quantos bombons deseja inserir na caixa?")
    for(i = 0; i < quantidades; i++){
        caixaDeBomBons.push(prompt("Digite o nome do bombom a ser inserido"))
    }
    alert(caixaDeBomBons);
    let exclusao = prompt("Digite o nome do bombom que você quer excluir!");
    let pos = caixaDeBomBons.indexOf(exclusao);
    if(pos == -1){
        alert("Esse bombom já foi comido")
    }
    else{
        caixaDeBomBons.splice(pos, 1);
    }
    alert(caixaDeBomBons);
    let tamanhoAtual = caixaDeBomBons.length;
    alert("Agora a caixa de bombons possui "+ tamanhoAtual+ " bombons!");
}