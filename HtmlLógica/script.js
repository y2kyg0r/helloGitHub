function calcularIMC(){
    let Peso = document.getElementById("inpPeso").value
    let Altura = document.getElementById("inpAltura").value
    let imc = Peso / (Altura**2)

    // document.getElementById("inpResultado").value = "Seu IMC é: " + imc

    document.getElementById('pResultado').innerHTML = "Seu IMC é: " + imc.toFixed()
    
    // alert("Se o Ygor não fosse tão gostoso, ele diria que seu IMC é: " + imc)
}
function calcularCachorro(){
    let idade = document.getElementById("idCachorro").value
    let cachorro = idade*7

if(cachorro >= 65){
    document.getElementById("Cachorro").innerHTML = "Seu cachorro tem "+cachorro+" anos, e ja pode se aposentar"
}
}