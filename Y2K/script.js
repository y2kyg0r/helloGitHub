function ex1008(){
    let id, horas, valorHora, salario;
    id = Number(prompt("Digite seu id"))
    horas = Number(prompt("Quantas horas você trabalhou?"))
    valorHora = Number (prompt("Qunato você ganha por hora?"))
    salario = horas*valorHora
    alert("ID: " + id + "\nSalário: R$" + salario.toFixed(2))
}
function ex1009(){
    let nome, salarioF, vendaEf, custoV, com, bonus, salarioG
    nome = prompt("Digite seu Nome")
    salarioF = Number(prompt("Digite seu salário fixo"))
    vendaEf = Number(prompt("Digite quantas vendas você efetuou"))
    custoV = Number(prompt("Digite o valor de cada venda"))
    com = vendaEf*custoV
    bonus = com * 0.15
    salarioG = bonus + salarioF
    alert("Olá "+nome+", o seu bônus mensal foi de: R$"+com+", e como você tem uma porcentagem de 15%, seu salário ficou: R$"+salarioG)
}
function ex1010(){
    let cod1, num1, val1, cod2, num2, val2, valorT1, valorT2, valorInteiro
    cod1 = Number(prompt("Digite o código da primeira peça"))
    num1 = Number(prompt("Digite quantas peças dessas você quer comprar"))
    val1 = Number(prompt("Digite o valor da primeira peça"))
    cod2 = Number(prompt("Digite o código da segunda peça"))
    num2 = Number(prompt("Digite a quantidade de peças que você quer comprar"))
    val2 = Number(prompt("Digite o valor da segunda peça"))

    valorT1 = num1*val1
    valorT2 = num2*val2
    valorInteiro = valorT1 + valorT2

    alert("O seu primeiro produto de código " + cod1+", e o seu segundo produto de código "+ cod2 +", ficou: R$" + valorInteiro +" no total")
}