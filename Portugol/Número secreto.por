programa {
  funcao inicio() {
    inteiro x, tentativa
    escreva("Digite o valor do n�mero escondido\n")
    leia(x)
    limpa()
    escreva("Digite uma tentativa\n")
    leia(tentativa)
    enquanto(tentativa != x){
      se(tentativa < x){
        escreva("Digite um n�mero maior\n")
    }
    senao{
      escreva("Digite um n�mero menor\n")
    }
    leia(tentativa)
    }
    escreva("Acertou")
  }
}
