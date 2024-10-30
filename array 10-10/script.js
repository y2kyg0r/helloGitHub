let numeros = []
let index1
let index2
let soma

function executar83(){
let numero 
for(let i = 0; i <= 49; i++){
    numero = Math.round(Math.random()*100)
    numeros.push(numero)
}
    console.log(numeros);
    document.getElementById('resultado').innerHTML = "Array gerado com sucesso"
}
function executar83b(){
    do{
     index1 = Number(prompt("Digite um número entre 0 e 24"))
}while(index1 < 0 || index1 > 24)

    do{
     index2 = Number(prompt("Digite outro número entre 0 e 24"))
}while(index2 < 0 || index2 > 24)

//console.log(numeros[index1])
//console.log(numeros[index2])

soma = numeros[index1] + numeros[index2]
console.log("Soma: ",soma)
}
function mostrarArray(){

    document.getElementById('resultado').innerHTML = '<h2>Lançamento dos dados</h2>'
    for(let i = 0; i < numeros.length; i++){
    document.getElementById('resultado').innerHTML +=  "Dados: " + numeros[i] + "<BR>"
    }
}
function pesquisar(){
    let valor = Number(prompt("Digite o número que você quer encontrar"))
    if(numeros.indexOf(valor) == -1){
        alert("Não tem essa bomba de número")
    }else{
        alert("Achei, está na posição: " + numeros.indexOf(valor))
    }
//     let numero = Number(prompt("qual número você quer pesquisar?"))
//     let indice = numeros.indexOf(numero)
//     if(indice != -1){
//         document.getElementById('resultado').innerHTML = "Achei! Ésta na posição: " + indice
//     }
//     else{
//         document.getElementById('resultado').innerHTML = "Não achei esse teu número ai"
// }
}
function executar85(){
    let numero 
    for(let i = 0; i <= 49; i++){
        numero = Math.round(Math.random()*201) - 100
        numeros.push(numero)
    }
        console.log(numeros);
        document.getElementById('resultado').innerHTML = "Array gerado com sucesso"
        mostrarArray()
    }
    function executar86(){
       for(i = 0; i <= numeros.length; i++){
       if(numeros[i] < 0){
        numeros[i] = 0
        }
    }
console.log(numeros)
//document.getElementById('resultado').innerHTML = "Array gerado com sucesso"
mostrarArray()
}
pai = []
mae = []
filho = []

function executar87(){
    let papai
    for(let i = 0; i <= 49; i++){
        papai = Math.round(Math.random()*100)
        pai.push(papai)
    }
    let mamae 
    for(let i = 0; i <= 49; i++){
        mamae = Math.round(Math.random()*100)
        mae.push(mamae)
   }
   mostrarArray()
}