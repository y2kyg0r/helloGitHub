programa {
  funcao inicio() {
    inteiro qtdTotal, qtdCadastrada
    real map, media, totalPeso, atv, peso 
    cadeia mensagem
    escreva("Digite a quantidade de atividades que deseja calcular: \n")
    leia(qtdTotal)
    escreva("Digite a média necessesaria para a aprovação: \n")
    leia(map)
    media = 0
    totalPeso = 0 
    qtdCadastrada = 0
    enquanto(qtdCadastrada < qtdTotal){
      escreva("Digite a nota da atividade \n")
      leia(atv)
      escreva("Digite o peso da atividade \n")
      leia(peso)
      totalPeso = totalPeso + peso
      media = media + (atv*peso)
      qtdCadastrada = qtdCadastrada + 1
    }
    media = media / totalPeso
    se (media >= map){
      mensagem = ""+media + ": Portanto está aprovado"
    }
    senao se(media >= map - 0.5){
      mensagem = ""+media + ":Portanto está aprovado por conselho" 
    }
    escreva(mensagem)
  }
}
