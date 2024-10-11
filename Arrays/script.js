let idades = [14, 22,34, 20, 23, 55, 45]

function testar(){
   // console.log(idades);
//    let nome = prompt("Digite seu nome: ")
//    console.log(nome)
    let numero = Number(prompt("qual número você quer pesquisar?"))
    let indice = idades.indexOf(numero)
    if(indice != -1){
        console.log("Achei! Ésta na posição: " + indice)
    }
    else{
        console.log("Não achei esse teu número ai")
    }
}
function cadastrar(){
    let numero = Number(prompt("Digite o número que deseja cadastrar"))
    idades.push(numero)
    console.log(numero)
}
function mostrarTodos(){
    // alert(idades)
    for(let i = 0; i < idades.length; i++){
         console.log(idades[i]);
         document.getElementById('saida').innerHTML += "<p>Alunos: " + idades[i] + "</p>"
    }
}