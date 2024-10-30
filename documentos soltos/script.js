function contar(){
    let n = Number(prompt("Digite um número"));
    let i = 1;
    while(i <= n){
        alert(i);
        i ++;
    }

}
function somar(){
    let n = Number(prompt("Digite um número"));
    let soma = 0;
    while(n != 0){
        soma = soma + n;
        n = Number(prompt("Digite mais um número"))
    }
    alert(soma);
}
function media(){
    let qtdTotal = Number(prompt("Digite a quantidade de atividades que deseja cadastrar"));
    let media = 0;
    for(let qtdCad = 0; qtdCad < qtdTotal; qtdCad++){
        let atv = Number(prompt("Digite a nota da atividade"));
        media += atv
    }
    media /= qtdTotal 
    alert(media)
}
function fatorial(){
    let n = Number(prompt("Digite o número para calcular o fatorial"));
    let i = 1;
    let r = 1;
    while(i <= n){
        r = r * i;
        i ++;
    }
    alert(r);
}
function multi(){
    let n = Number(prompt("Digite um número"));
    let  tabela = "";
    for (let mult = 1; mult <= 10; mult++){
        tabela += "\n" +n+ "x" +mult+"="+(n*mult);
    }
    alert(tabela)
}
function pares(){
    let n = Number(prompt("Digite um número"));
    let pares  = "";
    for(let par = 1; par <= n; par ++){
        if(par % 2 == 0){
            pares += "\n"+par;
        }
    }
    alert(pares)
}
function Contar(){
    let n = Number(prompt("Digite um número"));
    let passo = Number(prompt("Digite o passo"));
    let i = 1;
    while(i < n){
        alert(i);
        i += passo;
    }
}
function impares(){
    let n = Number(prompt("Digite um número"));
    let impares  = "";
    for(let impar = 1; impar <= n; impar ++){
        if(impar % 2 != 0){
            impares += "\n"+impar;
        }
    }
    alert(impares)
}
function multiplo(){
    let n1 = Number(prompt("Digite um número"));
    let n2 = Number(prompt("Digite o possivel múltiplo"));
    if(n2 % n1 == 0){
        alert(n2  + " É multiplo de "+n1);
    }
    else{
        alert(n2+" Não é múltiplo de "+n1)
    }
}
function primo(){
    let n = Number(prompt("Digite um número"));
    let qtdDivisores = 0;
    let ant = 1;
    while(ant <= n){
        if(n % ant == 0){
            qtdDivisores ++;
        }
        ant ++;
    }
    if(qtdDivisores == 2){
        alert(n +" é primo")
    }
    else{
        alert(n +" não é primo")
    }
}