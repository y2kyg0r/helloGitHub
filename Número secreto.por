programa {
  funcao inicio() {
    inteiro x, tentativa
    escreva("Digite o valor do número escondido\n")
    leia(x)
    limpa()
    escreva("Digite uma tentativa\n")
    leia(tentativa)
    enquanto(tentativa != x){
      se(tentativa < x){
        escreva("Digite um número maior\n")
    }
    senao{
      escreva("Digite um número menor\n")
    }
    leia(tentativa)
    }
    escreva("Acertou")
  }
}
