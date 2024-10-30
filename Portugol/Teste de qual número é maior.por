programa {
  funcao inicio() {
    real numero, digito
    escreva("Digite um número\n")
    leia(numero)
    escreva("Digite um número novamente\n")
    leia(digito)
    se (numero > digito)
    escreva("O maior número é: "+numero)
    senao 
    escreva("O maior número é: "+digito)
  }
}
